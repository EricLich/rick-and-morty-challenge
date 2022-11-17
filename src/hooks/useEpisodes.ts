import { useEffect, useRef, useState } from "react";

import { customFetch } from "../services/fetch";
import { ApiResponseFormat, Episode } from "../utils/types";

interface useEpisodeshReturn {
  episodes: Episode[];
  loading: boolean;
  error: any;
}

export const useEpisodes = (fetchUrl: string): useEpisodeshReturn => {
  const mounted = useRef<boolean>(false);
  const [fetchReturn, setFetchReturn] = useState<useEpisodeshReturn>({
    episodes: [],
    error: undefined,
    loading: false
  })

  useEffect(() => {
    const controller = new AbortController();
    if (mounted.current) {
      setFetchReturn({ ...fetchReturn, loading: true });
      customFetch(fetchUrl).then((res: ApiResponseFormat<Episode>) => {
        const episodeRequests: Promise<ApiResponseFormat<Episode>>[] = [];
        let episodes: Episode[] = res.results;

        for (let i = 2; i <= res.info.pages; i++) {
          episodeRequests.push(customFetch(`${import.meta.env.VITE_API_URL}/episode?page=${i}`))
        }

        Promise.all(episodeRequests).then((newRes: ApiResponseFormat<Episode>[]) => {
          newRes.forEach((response: ApiResponseFormat<Episode>) => {
            episodes.push(...response.results)
          })
          setFetchReturn({ ...fetchReturn, episodes: [...fetchReturn.episodes, ...episodes], loading: false });
        }).catch(err => setFetchReturn({ ...fetchReturn, error: err }));

      }).catch(err => setFetchReturn({ ...fetchReturn, error: err }));
      return;
    }
    return () => {
      controller.abort();
      mounted.current = true;
    }
  }, []);

  return fetchReturn;
}

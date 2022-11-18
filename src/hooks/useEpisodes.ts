import { useEffect, useRef, useState } from "react";
import { API_URL } from "../api/apiConstants";

import { customFetch } from "../services/fetch";
import { getLocalEpisodes, setLocalEpisodes } from "../utils/functions";
import { ApiResponseFormat, Episode } from "../utils/types";

interface useEpisodeshReturn {
  episodes: Episode[];
  loading: boolean;
  error: any;
}

export const useEpisodes = (fetchUrl: string): useEpisodeshReturn => {
  const [fetchReturn, setFetchReturn] = useState<useEpisodeshReturn>({
    episodes: [],
    error: undefined,
    loading: false
  })

  useEffect(() => {
    const localEpisodes: Episode[] = getLocalEpisodes();
    const abortController = new AbortController();
    if (localEpisodes.length === 0) {
      setFetchReturn({ ...fetchReturn, loading: true });
      customFetch(fetchUrl).then((res: ApiResponseFormat<Episode>) => {
        const episodeRequests: Promise<ApiResponseFormat<Episode>>[] = [];
        let episodes: Episode[] = res.results;
        console.log(res.results);

        for (let i = 2; i <= res.info.pages; i++) {
          episodeRequests.push(customFetch(`${API_URL}/episode?page=${i}`))
        }

        Promise.all(episodeRequests).then((newRes: ApiResponseFormat<Episode>[]) => {
          newRes.forEach((response: ApiResponseFormat<Episode>) => {
            episodes.push(...response.results)
          })
          setLocalEpisodes(episodes);
          setFetchReturn({ ...fetchReturn, episodes: [...fetchReturn.episodes, ...episodes], loading: false });
        }).catch(err => setFetchReturn({ ...fetchReturn, error: err }));

      }).catch(err => setFetchReturn({ ...fetchReturn, error: err }));
      return;
    }

    if (localEpisodes.length > 0) {
      setFetchReturn({ ...fetchReturn, episodes: [...fetchReturn.episodes, ...localEpisodes], loading: false });
    }
    return () => {
      abortController.abort();
    }
  }, []);

  return fetchReturn;
}

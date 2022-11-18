import React from "react";
import { CharacterStatus } from "../utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse, faSkullCrossbones, faQuestion } from "@fortawesome/free-solid-svg-icons";

interface StatusIcon {
  status: CharacterStatus;
}

const StatusIcon: React.FC<StatusIcon> = ({ status }) => {
  const renderStatusIcon = () => {
    if (status === CharacterStatus.ALIVE) {
      return <FontAwesomeIcon icon={faHeartPulse} />;
    }

    if (status === CharacterStatus.DEAD) {
      return <FontAwesomeIcon icon={faSkullCrossbones} />;
    }

    if (status === CharacterStatus.UNKNOW) {
      return <FontAwesomeIcon icon={faQuestion} />;
    }
  };

  return <>{renderStatusIcon()}</>;
};

export default StatusIcon;

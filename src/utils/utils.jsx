import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSkullCrossbones,
    faHeartbeat,
    faQuestion,
    faVenus,
    faMars,
    faGenderless,
    faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

const statusMapping = {
    Alive: <FontAwesomeIcon icon={faHeartbeat} />,
    Dead: <FontAwesomeIcon icon={faSkullCrossbones} />,
    unknown: <FontAwesomeIcon icon={faQuestion} />,
};

const genderMapping = {
    Female: <FontAwesomeIcon icon={faVenus} />,
    Male: <FontAwesomeIcon icon={faMars} />,
    Genderless: <FontAwesomeIcon icon={faGenderless} />,
    unknown: <FontAwesomeIcon icon={faQuestionCircle} />,
};

export { statusMapping, genderMapping };

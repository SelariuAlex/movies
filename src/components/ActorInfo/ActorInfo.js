import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

import './ActorInfo.css';

const ActorInfo = props => {
  return (
    <div className="actorinfo">
      <h1>{props.location.actorName}</h1>
      <img
        src={
          props
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}/${props.match.params.actor}`
            : './images/no_image.jpg'
        }
        alt="actorthumb"
      />
    </div>
  );
};

export default ActorInfo;

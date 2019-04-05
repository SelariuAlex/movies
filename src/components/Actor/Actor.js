import React from 'react';
import { IMAGE_BASE_URL } from '../../config';
import { Link } from 'react-router-dom';
import './Actor.css';

const Actor = ({ actor, clickable, movieId }) => {
  const POSTER_SIZE = 'w154';

  return (
    <div className="actor">
      {clickable ? (
        <Link
          to={{
            pathname: `/${movieId}/${actor.profile_path}`,
            actorName: `${actor.name}`
          }}
        >
          <img
            src={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : './images/no_image.jpg'
            }
            alt="actorthumb"
          />
        </Link>
      ) : (
        <img
          src={
            actor.profile_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
              : './images/no_image.jpg'
          }
          alt="moviethumb"
        />
      )}

      <span className="actor-name">{actor.name}</span>
      <span className="actor-character">{actor.character}</span>
    </div>
  );
};

export default Actor;

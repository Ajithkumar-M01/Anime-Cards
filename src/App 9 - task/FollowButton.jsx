import React, { useState } from 'react';
import "./SpiritedAway.css"

const FollowButton = ({ charac }) => {
  const [isFollowing, setIsFollowing] = useState(true);
  const [followers, setFollowers] = useState(charac.following);

  const handleFollow = () => {
    setIsFollowing(false);
    setFollowers(followers+1);
  };

  const handleUnfollow = () => {
    setIsFollowing(true);
    setFollowers(followers-1);
  };

  return (
    <div className="card2">
      <img src={charac.image} alt={charac.title} className="imgp" />
      <h2>{charac.title}</h2>
      <p>{charac.description}</p>
      <button onClick={isFollowing ? handleFollow : handleUnfollow} className="followButton">
        {isFollowing ? 'Follow' : 'Unfollow'}
      </button>
      <p className='followers'>Followers: {followers}</p>
    </div>
  );
};

export default FollowButton;

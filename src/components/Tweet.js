import React from 'react';
require('react-datetime');

const Tweet = props => {
  let replyIcon = <i className="fa fa-reply" aria-hidden="true" onClick={ event => alert("reply") }></i>;
  let retweetIcon = <i className="fa fa-retweet" aria-hidden="true" onClick={ event => alert("retweet") }>{props.tweet.retweet_count}</i>;
  let likeIcon = <i className="fa fa-heart" aria-hidden="true" onClick={ event => alert("like") }>{props.tweet.favorite_count}</i>;
  let moreIcon = <i className="fa fa-ellipsis-h" aria-hidden="true" onClick={ event => alert("more") }></i>;
  let tweetText = <p className="tweet">{props.tweet.text}</p>;
  let userName = <p className="username">{props.tweet.user.name}</p>;
  let screenName = <p className="screenname">@{props.tweet.user.screen_name}</p>;
  let postTime = <p className="time">{Date(props.tweet.timestamp_ms)}</p>;
  let profileImage = <img src={props.tweet.user.profile_image_url}/>;
  let mediaImage;

  if (props.tweet.favorited) {
    likeIcon = <i className="fa fa-heart red" aria-hidden="true" onClick={ event => alert("like") }>{props.tweet.favorite_count}</i>;
  };

  if (props.tweet.retweeted) {
    retweetIcon = <i className="fa fa-retweet green" aria-hidden="true" onClick={ event => alert("retweet") }>{props.tweet.retweet_count}</i>;
  };

  if (props.tweet.entities.media) {
    let mediaImage = <img src={props.tweet.entities.media[0].media_url}/>;
  };

  return (
    <div className="tweets">
      {profileImage}
      {userName}
      {screenName}
      {postTime}
      {tweetText}
      {mediaImage}
      {replyIcon}
      {retweetIcon}
      {likeIcon}
      {moreIcon}
    </div>
  );
};

export default Tweet;

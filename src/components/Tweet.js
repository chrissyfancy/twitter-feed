import React from 'react';
require('react-datetime');

const Tweet = props => {
  let replyIcon = <i className="fa fa-reply" onClick={ event => alert("reply") }></i>;

  let likeIcon;
  if (props.tweet.favorited) {
    likeIcon = <i className="fa fa-heart red" onClick={ event => alert("like") }>{props.tweet.favorite_count}</i>;
  } else {
    likeIcon = <i className="fa fa-heart" onClick={ event => alert("like") }>{props.tweet.favorite_count} </i>;
  }

  let retweetIcon;
  if (props.tweet.retweeted) {
    retweetIcon = <i className="fa fa-retweet green" onClick={ event => alert("retweet") }>{props.tweet.retweet_count}</i>;
  } else {
    retweetIcon = <i className="fa fa-retweet" onClick={ event => alert("retweet") }>{props.tweet.retweet_count}</i>;
  }

  let mediaImage;
  if (props.tweet.entities.media) {
    let mediaImage = <img src={props.tweet.entities.media[0].media_url}/>;
  };

  return (
    <div className="tweet">
      <img src={props.tweet.user.profile_image_url}/>
      <p className="username">{props.tweet.user.name}</p>
      <p className="screenname">@{props.tweet.user.screen_name}</p>
      <p className="time">{Date(props.tweet.timestamp_ms)}</p>
      <p>{props.tweet.text}</p>
      {mediaImage}
      {replyIcon}
      {retweetIcon}
      {likeIcon}
      <i className="fa fa-ellipsis-h" onClick={ event => alert("more") }></i>
    </div>
  );
};

export default Tweet;

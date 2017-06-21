import React from 'react';
import Tweet from './Tweet';

const TwitterFeed = props => {
  let tweets = props.data.map( tweet => {
    return(
      <Tweet
        key={tweet.id_str}
        tweet={tweet}
      />
    );
  });

  return(
    <div>{tweets}</div>
  );
};

export default TwitterFeed;

import React from 'react';
import Tweet from './Tweet';

class TwitterFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTweet: []
    }
    this.resetSelectedTweet = this.resetSelectedTweet.bind(this)
  }

  resetSelectedTweet(tweet) {
    let newTweets = this.state.selectedTweet.concat(tweet)
    this.setState({ selectedTweet: newTweets })
  }

  render() {
    let tweets = this.props.data.map(tweet => {

      let className;
      if(this.state.selectedTweet.includes(tweet.id_str)){
        className = "selected"
      } else {
        className = ""
      }

      let handleClick = () => {
        this.resetSelectedTweet(tweet.id_str)
      }

      return(
        <Tweet
          id={tweet.id_str}
          key={tweet.id_str}
          tweet={tweet}
          className={className}
          handleClick={handleClick}
        />
      )
    })

  return(
    <div>
      {tweets}
    </div>
    )
  }
}

export default TwitterFeed;

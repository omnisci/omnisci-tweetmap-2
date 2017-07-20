/* eslint-disable react/no-danger */
import PropTypes from "prop-types"
import React from "react"

const urlify = (tweetText) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g
  const handleRegex = /@\w+/g
  const hashRegex = /#\w+/g

  tweetText = tweetText.replace(urlRegex, (url) => (
    `<a class="tweet-link" href="${url}" target="_blank">${url}</a>`
  ))

  tweetText = tweetText.replace(handleRegex, (handle) => (
    `<a class="tweet-link" href="https://www.twitter.com/${handle.substring(1)}" target="_blank">${handle}</a>`
  ))

  tweetText = tweetText.replace(hashRegex, (hashtag) => (
    `<a class="tweet-link" href="https://www.twitter.com/hashtag/${hashtag.substring(1)}" target="_blank">${hashtag}</a>`
  ))

  return {__html: tweetText}
}

const Tweet = props =>
  <div className="tweetItem">
    <img className="tweetImage" src={props.imgLink} />
    <div className="tweetBlock">
      <p style={{color: "grey"}}>
        {props.handle} · {props.date}
      </p>
      <p dangerouslySetInnerHTML={urlify(props.body)} />
    </div>
  </div>

Tweet.propTypes = {
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  imgLink: PropTypes.string.isRequired
}

export default Tweet

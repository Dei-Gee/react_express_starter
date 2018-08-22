import React from 'react';


const embedTweets = () => componentDidMount () 
{
  const script = document.createElement("script");

  script.src = "https://platform.twitter.com/widgets.js";
  script.async = true;

  document.body.appendChild(script);
}

export default embedTweets;


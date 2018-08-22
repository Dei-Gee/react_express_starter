import React from 'react';

const Contact = () => {
    return (
      <div className="content-wrapper">
      <div className="left">
        <p>
          This is the contact page!
        </p>
      </div>
      <div className="right">
        <div className="feed home-top">
          <h3>News Feed</h3>
      
          <div className="news-item">
            <p className="origin">Canada-Quebec</p>
            <p className="item-title">
              Chantel Herbert: Quebec Corruption Inquiry struggling for relevance
            </p>
          </div>

          <div className="news-item">
            <p className="origin">Canada-Quebec</p>
            <p className="item-title">
              Chantel Herbert: Quebec Corruption Inquiry struggling for relevance
            </p>
          </div>

          <div className="news-item">
            <p className="origin">Canada-Quebec</p>
            <p className="item-title">
              Chantel Herbert: Quebec Corruption Inquiry struggling for relevance
            </p>
          </div>

        </div>

        <div className="feed bottom">
          <h3>Twitter Feed</h3>
        </div>
      </div>
    </div>
    );

}

export default Contact;
import React from 'react';
import './About.css';

const About = () => {
    return (
      <div className="content-wrapper">
      <div className="left">
        <p>
          This is the about page!
        </p>
      </div>
      <div className="right">

        <div className="mission">
          <h3 className="mission-title">Mission Statement</h3>

          <p className="mission-statement">
            Lorem ipsum dolor sit amet, eum no agam aperiri voluptaria, ne debitis 
            recteque maluisset eam, eum nemore singulis elaboraret ne. Eam corrumpit 
            deterruisset cu, odio torquatos nam id. In vim nostrum perfecto facilisis, 
            nec doctus facilis feugait te. Autem eruditi lucilius duo ei. Est nonumes assentior cu. 
            Id usu minim integre sapientem, et vis evertitur philosophia.
          </p>
        </div>
        <div className="feed top">
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

export default About;
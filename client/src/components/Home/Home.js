import React from 'react';
import './Home.css';
import woman from '../images/woman.jpg';
import bridge from '../images/bridge.jpg';
import rohingya from '../images/rohingya.jpg';

var imgIndex = 0;




const Home = () => {
    return (
      
        
        <div className="content-wrapper">
          <div className="left">
            <div className="breakingNews">
              <h1>Canadian News</h1>

              <div className="headlineSlideShow">
                <div className="featured-story">
                  Featured Story
                </div>
                <div className="news-img">
                  <img src={woman} alt="woman" />
                  <img src={bridge} alt="bridge" />
                  <img src={rohingya} alt="rohingya" />
                </div>

                <div className="text-div">
                  <div className="circles">
                    <span className="badge"></span>
                    <span className="badge"></span>
                    <span className="badge"></span>
                    <span className="badge"></span>
                    <span className="badge"></span>
                  </div>

                  <h2 className="text-title">Trophy Hunting or Poaching?</h2>
                  <p className="text-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. 
                  </p>
                </div>
              </div>

              <div className="otherNews">
                <div className="otherNewsImg">
                  <img src={bridge} alt="bridge" />
                </div>

                <div className="otherNewsText">
                    <h3 className="other-title">Etera xpat in resquitas</h3>
                    <p className="other_text">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. Consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <p className="linktofull"><a href="">Read Full Story <span> > </span> </a></p>
                </div>
              </div>

              <div className="otherNews">
                <div className="otherNewsImg">
                  <img src={bridge} alt="bridge" />
                </div>

                <div className="otherNewsText">
                    <h3 className="other-title">Etera xpat in resquitas</h3>
                    <p className="other_text">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. Consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <p className="linktofull"><a href="">Read Full Story <span> > </span> </a></p>
                </div>
              </div>
            </div>

            
            <div className="aceaNews">
              <h1>Anti-Corruption News</h1>
              <div className="headlineSlideShow">
                <div className="featured-story">
                  Featured Story
                </div>
                <div className="news-img">
                  <img src={woman} alt="woman" />
                </div>

                <div className="text-div">
                  <h2 className="text-title">Trophy Hunting or Poaching?</h2>
                  <p className="text-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. 
                  </p>
                </div>
              </div>

              <div className="otherNews">
                <div className="otherNewsImg">
                  <img src={bridge} alt="bridge" />
                </div>

                <div className="otherNewsText">
                    <h3 className="other-title">Etera xpat in resquitas</h3>
                    <p className="other_text">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. Consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <p className="linktofull"><a href="">Read Full Story <span> > </span> </a></p>
                </div>
              </div>

              <div className="otherNews">
                <div className="otherNewsImg">
                  <img src={bridge} alt="bridge" />
                </div>

                <div className="otherNewsText">
                    <h3 className="other-title">Etera xpat in resquitas</h3>
                    <p className="other_text">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. Consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <p className="linktofull"><a href="">Read Full Story <span> > </span> </a></p>
                </div>
              </div>
            </div>

            <div className="stories">
              <div className="story"></div>
            </div>
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

export default Home;
    
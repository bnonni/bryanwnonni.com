import React from 'react'

function Introduction(){
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/foggy-mtn.jpeg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1><span style={{color: '#F7931B'}}>₿</span>ryan W. Nonni</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/1m4SzFo9ZlSmJpacd6gD9GdBCLRIymDTekCuRSRjitE4/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/react-code.jpeg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{color: 'white'}}>I like to build.</h1>
                          <p><a  style={{border: '2px solid white', color: 'white', fontWeight: 'bold'}} className="btn btn-primary btn-learn" href="https://github.com/bnonni" target="_blank" rel="noopener noreferrer">View Projects<i className="icon-computer" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/bitcoin.jpeg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I like crypto.</h1>
                          <p><a id="bitcoin-link" className="btn btn-primary btn-learn" href="https://bitcoin.org/bitcoin.pdf" target="_blank" rel="noopener noreferrer">Learn about <span style={{color: '#F7931B'}}>₿</span>itcoin</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }

export default Introduction;
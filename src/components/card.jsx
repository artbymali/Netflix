import React from 'react'

function card({flex }) {
  return (
    <>
        <div className="card">
            <div className={`card_content ${flex }`}>
                <div className="card_text">
                    <h2>Enjoy on your TV</h2>
                    <h4>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h4>
                </div>
                <div className="card_img">
                  <img src="/imgg.png" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default card

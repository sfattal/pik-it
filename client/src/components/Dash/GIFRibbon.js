import React, { Component } from 'react';
import CreateGIF from '../../create.gif'
import RankGIF from '../../rank.gif'
import ResultGIF from '../../result.gif'
// import '../../pages/pages.css'

function GIFs() {

    return(
        <div id="instructionsCard" className="card text-center shadow-sm mt-3">
            <div className="card-body rounded">
                {/* <h5 className="card-title">This is how you Pik It!</h5> */}
                <div className="row">
                <div className="col">
                    <p className="card-text">1 - Create</p>
                    <img className="instructionGIF" src = {CreateGIF} />
                </div>
                <div className="col">
                    <p className="card-text">2 - Share &amp; Rank</p>
                    <img className="instructionGIF" src = {RankGIF} />
                </div>
                <div className="col">
                    <p className="card-text">3 - Pik It!</p>
                    <img className="instructionGIF" src = {ResultGIF} />
                </div>
                
                {/* <p className="card-text border-right instructions">Share and Rank</p>
                <p className="card-text instructions">Pik It!</p> */}
                </div>
            </div>
        </div>
    )
}

export default GIFs
import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';

import {
    Introduction,
    About,
    Portfolio,
    Sidebar,
    Timeline,
} from './components';

import { data } from './data/data';
import './App.css';

import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
  });

const App = () => {
    const [lpData, setLpData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLpData(data);
        setLoading(false);
    }, [lpData]);

    return loading ? (
        <div className="loading-container">
            <ReactLoading className={'loading'} type={'bars'} color={'black'} />
        </div>
    ) : (
        <div id="colorlib-page">
            <div id="container-wrap">
                <Sidebar></Sidebar>
                <div style={{ padding: 0 }} id="colorlib-main">
                    <Introduction></Introduction>
                    <About></About>
                    <Portfolio data={lpData.Projects}></Portfolio>
                    <Timeline></Timeline>
                </div>
            </div>
        </div>
    );
};

export default App;

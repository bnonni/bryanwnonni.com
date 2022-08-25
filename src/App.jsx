import { useState, useEffect } from "react";
import ReactLoading from 'react-loading';

import Sidebar from './components/Sidebar';
import Introduction from './components/Introduction';
import About from './components/About';
import Portfolio from './components/Portfolio/Portfolio';
import Timeline from './components/Timeline';
import Blog from './components/Blog/Blog';

import data from "./data/data.json";
import './App.css';

const App = () => {
    const [lpData, setLpData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        data ? setLpData(data) : setLoading(true);
    }, []);

    return (
        loading ? (
            <div className="loading-container">
                <ReactLoading className={"loading"} type={"bars"} color={"black"} />
            </div>
        ) : (
            <div id="colorlib-page">
                <div id="container-wrap">
                    <Sidebar></Sidebar>
                    <div style={{ padding: 0 }} id="colorlib-main">
                        <Introduction></Introduction>
                        <About></About>
                        <Portfolio data={lpData.Projects}></Portfolio>
                        <Blog data={lpData.Posts}></Blog>
                        <Timeline></Timeline>
                    </div>
                </div>
            </div>
        )
    );
}

export default App;

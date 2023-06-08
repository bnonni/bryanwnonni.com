export const About = () => {
    return (
        <div>
            <section
                style={{ padding: '0 1em' }}
                className="colorlib-about"
                data-section="about"
            >
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div
                                className="row row-bottom-padded-sm animate-box"
                            >
                                <div className="col-md-12">
                                    <div className="about-desc">
                                        <span className="heading-meta">
                                            Who?
                                        </span>
                                        <h2 className="colorlib-heading">
                                            About
                                        </h2>
                                        <h4>
                                            "People don't buy what you do, they
                                            buy why you do it."{' '}
                                            <a href="https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action">
                                                -Simon Sinek
                                            </a>
                                        </h4>
                                        <p>
                                            My name is Bryan. I have degrees in Communications from UGA (circa 2014) and Computer Science from Georgia State (circa 2019).<br />
                                            I currently work with bitcoin at various levels in different capacities.
                                        </p>
                                        <h4>But first, some history ... </h4>
                                        <p>
                                            <p>2015</p>
                                            <ul>
                                                <li>I was first introduced to Bitcoin by a friend, and not being technical, I dismissed the idea without much investigation.</li>
                                            </ul>
                                            <p>2016</p>
                                            <ul>
                                                <li>I took 2 coding bootcamps and fell in love.</li>
                                            </ul>
                                            <p>2017 - 2018</p>
                                            <ul>
                                                <li>I became re-aware of blockchains and cryptocurrencies via the ICO boom.</li>
                                                <li>I took online courses about blockchains and cryptocurrencies.</li>
                                                <li>I began experimenting with Bitcoin, Ethereum, etc. from a financial perspective.</li>
                                                <li>I worked full time in digital marketing.</li>
                                                <li>I started part-time courses at Georgia State to get a CS degree.</li>
                                            </ul>
                                            <p>2019</p>
                                            <ul>
                                                <li>I quit my job and went to school at Georgia State full time for a CS degree.</li>
                                                <li>I graduated in Dec 2019 after 1 year of courses.</li>
                                            </ul>
                                            <p>2020</p>
                                            <ul>
                                                <li>I accpeted at role at NCR Corporation in the Innovation Lab as a Software Engineer.</li>
                                                <li>I did research & development specializing in blockchain technology to build products for customers.</li>
                                                <li>I used Hyperledger Indy to build a decentralized identity system and Ethereum to build a proof-of-concept cryptocurrency system on testnet.</li>
                                            </ul>
                                            <p>2021</p>
                                            <ul>
                                                <li>I shifted focus to the Bitcoin and the Lightning Network.</li>
                                                <li>I read Mastering Lightning and built a Lightning node for the Lab and for myself.</li>
                                                <li>I used OpenNode & Strike to build a proof of concept integrating Lightning payments into an internally facing NCR checkout system.</li>
                                            </ul>
                                            <p>Nov 2021 - Present</p>
                                            <ul>
                                                <li>I work on the LibertyPay application stack.</li>
                                                <li>LibertyPay enables faster, cheaper remittances by leveraging on-chain Bitcoin as the settlement layer.</li>
                                                <li>LibertyPay sends from the US to Brazil, Dominican Republic, Portugal and Guatemala.</li>
                                                <li>I am currently building a mobile application (iOS & Android).</li>
                                                <li>The new mobile app will allow the LibertyPay business to scale transactions direct to consumers.</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ padding: '0 1em' }} className="colorlib-about">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div
                            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                        >
                            <span className="heading-meta">What?</span>
                            <h2 className="colorlib-heading">
                                Areas of Expertise
                            </h2>
                        </div>
                    </div>
                    <div className="row row-pt-md">
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-1">
                                <span className="icon">
                                    <i className="icon-bulb" />
                                </span>
                                <div className="desc">
                                    <h3>Languages & Frameworks</h3>
                                    <p>HTML • CSS • JavaScript • NodeJS • ExpressJS • TypeScript • ReactJS • NextJS • Shell • Python • Rust • React-Native • Flutter</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-5">
                                <span className="icon">
                                    <i className="icon-data" />
                                </span>
                                <div className="desc">
                                    <h3>Bitcoin & DID</h3>
                                    <p>Bitcoin Core • LND • CLN • LDK • Bolt12 • Taro • LNURL • Polar • Web5
                                    <br />
                                    <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-2">
                                <span className="icon">
                                    <i className="icon-data" />
                                </span>
                                <div className="desc">
                                    <h3>Cloud, SysAdmin, DevOps, DB</h3>
                                    <p>DigitalOcean • GCP • AWS • Linux • Ubuntu • Fedora • Nginx • Docker • Git • Git Actions • MongoDB • SQL • Postgres • Redis • Docker • Git</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

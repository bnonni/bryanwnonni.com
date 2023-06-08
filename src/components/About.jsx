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
                                            I am a software engineer, skilled in a range of technologies including Shell, Python, JS, NodeJS, TS, React, Angular, and decentralized technologies like Bitcoin Core, LND, Web5 and Nostr. Currently serving as a Software Engineer II at NCR's LibertyPay (LP) / LibertyX (LX), I led the integrations between LibertyPay and several financial service providers and banks, enabling new remittance corridors and increasing sales volume. I am currently leading the development of a new mobile app that broadens access to remittance payments for LP direct to consumers.

                                            Before this role, I served as a Software Engineer I & Tech Lead in NCR's Innovation Lab specliazing in DLT R&D. My success in the lab can be highlighted by several projects, including the development of an SSI API, aiding the establishment of the NCR/Strike partnership, and the development of an integration of buy now, pay later loans at point-of-sale.

                                            Beyond my work at NCR, I am an active participant and user of the Bitcoin and Lightning technology communities. As a Co-Founder of ATL BitLab and Co-Organizer of Atlanta BitDevs and The Atlanta Bitcoin Conference, I am committed to promoting coworking, community-led education, and market adoption of Bitcoin and Lightning technologies. I have also participated in numerous hackathons, demonstrating an ability to create innovative solutions in competitive environments.
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

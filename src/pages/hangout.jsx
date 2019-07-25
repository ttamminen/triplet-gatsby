import React from "react"

import Content from "../components/layouts/Content"

const Hangout = () => (
    <Content>
        <section className="article-highlight large thanks">
            <img
                className="article-highlight-image"
                src="images/tatu_tamminen.jpg"
                alt="Tatu Tamminen"
            />
            <div className="highlight-content">
                <h1 className="highlight-heading">
                    Thank you for your interest in having a Google Hangout
                    session!
                </h1>
                <div className="u-left-aligned-content">
                    <h4>Some articles that you might find interesting:</h4>
                    <ul>
                        <li>
                            <a href="https://www.triplet.fi/blog/how-to-get-most-out-of-meetups-and-conferences/">
                                How to Get Most out of Meetups and Conferences
                            </a>
                        </li>
                        <li>
                            <a href="https://www.triplet.fi/blog/specialist-or-generalist/">
                                Specialist or Generalist
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </Content>
)

export default Hangout

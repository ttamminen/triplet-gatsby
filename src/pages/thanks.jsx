import React from "react"

const Thanks = () => (
    <section className="article-highlight large thanks">
        <img
            className="article-highlight-image"
            src="https://triplet-assets.s3.eu-central-1.amazonaws.com/triplet/tatu_tamminen.jpg"
            alt="Tatu Tamminen"
        />
        <div className="highlight-content">
            <h1 className="highlight-heading">
                Thanks a lot, you&apos;ll hear more from me shortly!
            </h1>
            <div className="u-left-aligned-content">
                <h4>Some of my most read articles:</h4>
                <ul>
                    <li>
                        <a href="https://www.triplet.fi/blog/using-automation-and-delegation-to-bring-employment-advantages-to-freelancing/">
                            Using automation and delegation to bring employment
                            advantages to freelancing
                        </a>
                    </li>
                    <li>
                        <a href="https://www.triplet.fi/blog/4-day-work-week-lessons-learned/">
                            4-day work week - Lessons learned
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
)

export default Thanks

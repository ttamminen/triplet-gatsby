import React from "react"

import Content from "../components/layouts/Content"

const ProjectOpportunities = () => (
    <Content>
        <section className="article-highlight large thanks">
            <img
                className="article-highlight-image"
                src="https://triplet-assets.s3.eu-central-1.amazonaws.com/triplet/tatu_tamminen.jpg"
                alt="Tatu Tamminen"
            />
            <div className="highlight-content">
                <h1 className="highlight-heading">
                    Great! You&apos;re now ready to receive project
                    opportunities.
                </h1>
                <div className="u-left-aligned-content">
                    <h4>Some articles that you might find interesting:</h4>
                    <ul>
                        <li>
                            <a href="https://www.triplet.fi/blog/hiring-practices-of-companies-and-how-to-be-part-of-the-game/">
                                Modern hiring process and how to be part of the
                                game
                            </a>
                        </li>
                        <li>
                            <a href="https://www.triplet.fi/blog/stop-requiring-job-applicants-to-be-passionate/">
                                Stop Requiring Job Applicants To Be Passionate
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </Content>
)

export default ProjectOpportunities

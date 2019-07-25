import React from "react"
import ContentWithLogo from "../layouts/ContentWithLogo"

const Index = () => (
    <ContentWithLogo>
        <section className="group me-and-what-i-do">
            <header>
                <h1 className="group-title">What I offer</h1>
            </header>

            <div className="me-and-what-i-do-wrapper">
                <section className="article-highlight large">
                    <img
                        className="article-highlight-image"
                        src="https://triplet-assets.s3.amazonaws.com/triplet/tatu_tamminen.jpg"
                        alt="Tatu Tamminen"
                    />
                    <div className="highlight-content">
                        <h1 className="highlight-heading">
                            Tatu Tamminen
                            <span className="highlight-subheading">
                                Independent Web Developer
                            </span>
                        </h1>
                        <p>I can help you on following:</p>
                        <ul className="u-left-aligned-content">
                            <li>Turn idea to a service</li>
                            <li>Help building a multidisciplinary team</li>
                            <li>Implement features that matter</li>
                            <li>Optimize page load and render times</li>
                        </ul>
                    </div>
                </section>

                <div className="skills-call-to-action-wrapper">
                    <section className="text-highlight skills-and-focus">
                        <div className="highlight-content">
                            <h1 className="highlight-heading">
                                Are you looking for someone who can help to
                                build a Web-based service?
                            </h1>
                            <p>
                                If so you are in the right place. I am an
                                experienced Web developer, and I have a plenty
                                of experience on cloud-based SaaS products.
                            </p>
                        </div>
                    </section>

                    <section className="call-to-action">
                        <h1 className="call-to-action-header">
                            <a href="mailto:tatu@triplet.fi?subject=We%20would%20like%20to%20work%20with%20you">
                                Hire me
                            </a>
                        </h1>
                    </section>
                </div>
            </div>

            <section className="article-highlight article-highlight-half">
                <blockquote className="plain frontpage-testimonial">
                    Efficient — with passion and ability that is rarely
                    encountered. Tatu has great dialogue with design teams, is
                    firm in his front-end skills, and challenges design
                    decisions that will impact the performance and/or usability
                    of large, highly important site.
                    <span>Mikko Kojo - Product Director at Sympa</span>
                </blockquote>
            </section>
        </section>

        <section className="group">
            <header>
                <h1 className="group-title">Selected work</h1>
            </header>

            <div className="references-wrapper">
                <section className="article-highlight mobile-split-half">
                    <img
                        className="article-highlight-image black"
                        src="https://triplet-assets.s3.amazonaws.com/triplet/contractzen.png"
                        alt="ContractZen logo"
                    />
                    <div className="highlight-content">
                        <h1 className="highlight-heading">
                            <a
                                className="highlight-heading-link"
                                href="https://www.contractzen.com/en/"
                            >
                                ContractZen
                            </a>
                        </h1>
                        <p>
                            Due Diligence solution for the 21st century
                            ContractZen is the smartest way to manage your
                            contracts, executive meetings and financial
                            documents easily and securely.
                        </p>
                    </div>
                </section>
                <section className="article-highlight mobile-split-half ">
                    <img
                        className="article-highlight-image"
                        src="https://triplet-assets.s3.amazonaws.com/triplet/sympa_mock.jpg"
                        alt="Sympa HR user-interface"
                    />
                    <div className="highlight-content">
                        <h1 className="highlight-heading">
                            <a
                                className="highlight-heading-link"
                                href="http://www.sympa.net/home.html"
                            >
                                Sympa HR
                            </a>
                        </h1>
                        <p>
                            The cloud-based, global human resources system,
                            Sympa HR combines all HRM and HRD processes
                            including recruitment into a single, logical entity.
                        </p>
                    </div>
                </section>
                <section className="article-highlight">
                    <img
                        className="article-highlight-image"
                        src="https://triplet-assets.s3.amazonaws.com/triplet/dearlucy_mock.jpg"
                        alt="Dear Lucy mock"
                    />
                    <div className="highlight-content">
                        <a
                            className="highlight-heading highlight-heading-link"
                            href="http://www.dearlucy.co"
                        >
                            Dear Lucy
                        </a>
                        <p>
                            Dear Lucy collects your key metrics from your
                            business software, documents and peoples&#x27; heads
                            into pretty dashboards showing you if you&#x27;re
                            hitting goals.
                        </p>
                    </div>
                </section>
            </div>
            <div className="references-wrapper">
                <section className="article-highlight mobile-split-half">
                    <img
                        className="article-highlight-image black"
                        src="https://triplet-assets.s3.amazonaws.com/triplet/polku_smartum_logo_white%404x.png"
                        alt="PolkuApp by Smartum"
                    />
                    <div className="highlight-content">
                        <h1 className="highlight-heading">
                            <a
                                className="highlight-heading-link"
                                href="https://www.polkuapp.com/"
                            >
                                Polku
                            </a>
                        </h1>
                        <p>
                            Groundbreaking fitness service gathers all of your
                            city’s best sports activities, pop-up training
                            sessions and other fitness activities in one simple
                            and easy to use iPhone app (also now available
                            online). In addition to finding the best activities,
                            Polku enables you to try all of them for free.
                        </p>
                    </div>
                </section>
                <section className="article-highlight mobile-split-half">
                    <img
                        className="article-highlight-image black"
                        src="https://triplet-assets.s3.amazonaws.com/triplet/nordsafety.png"
                        alt="NordSafety"
                    />
                    <div className="highlight-content">
                        <h1 className="highlight-heading">
                            <a
                                className="highlight-heading-link"
                                href="https://www.nordsafety.com/"
                            >
                                NordSafety
                            </a>
                        </h1>
                        <p>
                            NordSafety is the new way to collect and share HSEQ
                            information. We&#x27;ve also put a lot a focus on
                            how to engage your staff in safety. With NordSafety
                            you are aware what&#x27;s happening on the field
                            with our photo and information streams. Our mobile
                            app and SaaS service is a perfect fit for high risk
                            or high quality industries, where you&#x27;ll make a
                            difference by knowing what&#x27;s happening on the
                            field in real-time.
                        </p>
                    </div>
                </section>
            </div>
        </section>
        <section className="group">
            <section className="article-highlight article-highlight-half">
                <blockquote className="plain frontpage-testimonial">
                    Efficient — with passion and ability that is rarely
                    encountered. Tatu has great dialogue with design teams, is
                    firm in his front-end skills, and challenges design
                    decisions that will impact the performance and/or usability
                    of large, highly important site.
                    <span>Mikko Kojo - Product Director at Sympa</span>
                </blockquote>
            </section>
        </section>

        <section className="group">
            <section className="article-highlight article-highlight-half">
                <div className="highlight-content">
                    <h1 className="highlight-heading">Workshops</h1>
                    <ul className="u-plain-list">
                        <li>
                            <a href="/workshops/mark_seemann">
                                Mark Seemann - From Design Patterns to Category
                                Theory
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </section>

        <section className="group">
            <section className="article-highlight article-highlight-half">
                <div className="highlight-content">
                    <h1 className="highlight-heading">
                        <a className="highlight-heading-link" href="/blog">
                            Blog
                        </a>
                    </h1>
                    <p>Thoughts on programming, technology and freelancing</p>
                </div>
            </section>
        </section>
    </ContentWithLogo>
)

export default Index

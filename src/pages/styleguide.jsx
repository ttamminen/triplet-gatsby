import React from "react"

const Styleguide = () => (
    <div>
        <h1>Styleguide</h1>
        <h2>Colours</h2>
        <ul className="styleguide-colors">
            <li>
                <div className="green" />
                Green
            </li>
            <li>
                <div className="abbey" />
                Abbey
            </li>
            <li>
                <div className="white" />
                White
            </li>
            <li>
                <div className="gallery" />
                Gallery
            </li>
            <li>
                <div className="silverchalice" />
                Silver Chalice
            </li>
            <li>
                <div className="spunpearl" />
                Spun Pearl
            </li>
            <li>
                <div className="fiord" />
                Fiord
            </li>
        </ul>
        <h2>Typography</h2>
        <h3>Sizes</h3>
        <div className="styleguide-section">
            <small>small</small>
            <p>body</p>
            <p className="alpha">alpha</p>
            <p className="beta">beta</p>
            <p className="gamma">gamma</p>
            <p className="delta">delta</p>
            <p className="epsilon">epsilon</p>
            <p className="zeta">zeta</p>
            <p className="eta">eta</p>
        </div>

        <h2>Buttons</h2>
        <a href="/" className="button">
            Linkkipainike
        </a>
        <hr />
        <h2>Lists</h2>
        <h3>Tag selector</h3>
        <ul className="tag-selector">
            <li className="tag-selector-item active">
                <a href="/">Active tag</a>
            </li>
            <li className="tag-selector-item">
                <a href="/">Inactive tag #1</a>
            </li>
            <li className="tag-selector-item">
                <a href="/">Inactive tag #2</a>
            </li>
            <li className="tag-selector-item">
                <a href="/">Inactive tag #3</a>
            </li>
            <li className="tag-selector-item">
                <a href="/">Inactive tag #4</a>
            </li>
        </ul>
        <h3>Item list</h3>
        <ul className="">
            <li />
        </ul>
        <h2>Images</h2>
        <h3>CV / Avatar</h3>
        <img
            src="https://triplet-assets.s3.eu-central-1.amazonaws.com/triplet/cv_tatu_tamminen.jpg"
            alt="CV"
        />
        <hr />
        <h2>Highlights</h2>
        <h3>Article highlight</h3>
        <div className="highlights">
            <section className="group">
                <header>
                    <h1 className="group-title">Group Title</h1>
                </header>

                <section className="article-highlight">
                    <img
                        className="article-highlight-image"
                        src="images/mock_306.png"
                        alt="mock"
                    />
                    <div className="highlight-content">
                        <h1 className="highlight-heading">
                            Article highlight title
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </section>
                <section className="article-highlight">
                    <img
                        className="article-highlight-image"
                        src="images/mock_306.png"
                        alt="mock"
                    />
                    <div className="highlight-content">
                        <h1 className="highlight-heading">
                            Article highlight title
                        </h1>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                        <a href="/" className="button highlight-action-link">
                            More about me
                        </a>
                    </div>
                </section>
            </section>

            <section className="group">
                <header>
                    <h1 className="group-title">Group Title</h1>
                </header>
                <section className="text-highlight">
                    <div className="highlight-content">
                        <h1 className="text-highlight-heading">
                            Text highlight
                        </h1>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </div>
                </section>
            </section>

            <section className="group">
                <header>
                    <h1 className="group-title">Group Title</h1>
                </header>
                <section className="call-to-action">
                    <h1 className="call-to-action-header">
                        <a href="/">Hire me</a>
                    </h1>
                </section>

                <section className="article-highlight large">
                    <img
                        className="article-highlight-image"
                        src="images/mock_472.png"
                        alt="mock"
                    />
                    <div className="highlight-content">
                        <h1 className="highlight-heading">
                            Heading
                            <span className="highlight-subheading">
                                Subheading
                            </span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                        <a href="/" className="button highlight-action-link">
                            More about me
                        </a>
                    </div>
                </section>
            </section>
        </div>

        <article className="blog-post">
            <header
                className="image-header"
                style={{
                    backgroundImage: `url("https://triplet-assets.s3.eu-central-1.amazonaws.com/triplet/mock_blog_highlight.jpg")`,
                }}
            >
                <h1>Example blog post</h1>
            </header>
            <div className="blog-post-content">
                <div className="blog-post-info">
                    <h2 className="blog-post-info-header blog-post-caption">
                        January 3, 2015 <span>Category 1</span>
                    </h2>
                </div>
                <div className="blog-post-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Repudiandae, dicta, atque assumenda obcaecati
                        dolor voluptas, est dolorem eligendi doloribus eos
                        quidem. Accusamus expedita ea neque, perferendis
                        perspiciatis distinctio veniam ipsa.
                    </p>
                    <pre>
                        <code className="hljs javascript">
                            {`
								function foo() {
									var x = -3;
									if (x < 0) {  // (*)
									var tmp = -x;
									...
									}
									console.log(tmp);  // 3
								}
							`}
                        </code>
                    </pre>
                    <img
                        className="blog-post-right-floated-content-image"
                        src="/images/mock_blog_content.jpg"
                        alt="dummy"
                    />
                    <h3 className="blog-post-caption">Test content caption</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Repellendus perferendis officiis quos inventore
                        aspernatur eaque soluta ullam veritatis non aliquid
                        dignissimos esse perspiciatis numquam quia nesciunt
                        officia, ratione molestiae doloribus.
                    </p>
                </div>
                <div className="blog-post-share">
                    <p className="blog-post-share-caption">Share this post</p>
                </div>
            </div>
        </article>
    </div>
)

export default Styleguide

import React from "react"

import ContentWithLogo from "../../components/layouts/ContentWithLogo"

const MarkSeemannWorkshop = () => (
    <ContentWithLogo>
        <section className="group">
            <header>
                <h1 className="group-title">Workshop by Mark Seemann</h1>
            </header>

            <div className="workshop-details-and-author-wrapper">
                <section className="text-highlight workshop-details">
                    <div className="highlight-content">
                        <h1 className="highlight-heading">Workshop details</h1>
                        <div className="mb-1">
                            <table className="table u-left-aligned-content mb-1 u-word-break-normal">
                                <tbody>
                                    <tr>
                                        <th>Topic</th>
                                        <td>
                                            From Design Patterns to Category
                                            Theory
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Where</th>
                                        <td>
                                            <a
                                                href="https://goo.gl/maps/QVuDBqdq2DP2"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Hotel Klaus K, Bulevardi 2-4
                                                00120 Helsinki
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>When</th>
                                        <td>21.11.2017, 9:00 – 17:00</td>
                                    </tr>
                                    <tr>
                                        <th>Price</th>
                                        <td>395€ + VAT</td>
                                    </tr>
                                    <tr>
                                        <th>Includes</th>
                                        <td>
                                            Workshop, breakfast, two course
                                            lunch (in Toscanini or Klaus K
                                            Dine), afternoon snacks and proper
                                            coffee + tea during the workshop
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <img
                                className="image-100 mb-1"
                                src="https://triplet-assets.s3.amazonaws.com/workshops/klausk_studiok.jpg"
                                alt="Klaus K - Studio K"
                                width="761"
                                height="400"
                            />
                            <img
                                className="image-100"
                                src="https://triplet-assets.s3.amazonaws.com/workshops/klausk.jpg"
                                alt="Klaus K - entrance"
                            />
                        </div>
                    </div>
                </section>
                <section className="article-highlight workshop-speaker">
                    <img
                        className="article-highlight-image workshop-speaker-portrait"
                        src="https://triplet-assets.s3.amazonaws.com/workshops/mark_seemann_portrait.jpg"
                        alt="Mark Seemann"
                    />
                    <div className="highlight-content">
                        <h1 className="highlight-heading">
                            Mark Seemann
                            <span className="highlight-subheading">
                                Programmer and Software Architect from
                                Copenhagen, Denmark
                            </span>
                        </h1>
                        <p className="u-left-aligned-content">
                            Mark Seemann helps programmers make code easier to
                            maintain. His professional interests include
                            functional programming, object–oriented development,
                            software architecture, as well as software
                            development in general.
                        </p>
                        <p className="u-left-aligned-content">
                            Mark has given numerous well-received talks in
                            conferences, such as NDC Conferences. Apart from
                            writing a book about Dependency Injection he has
                            also created several Pluralsight courses, and
                            written numerous articles and blog posts about
                            programming. Mark created popular
                            <a href="https://github.com/AutoFixture/AutoFixture">
                                AutoFixture library
                            </a>
                            that has been downloaded over 1.7 million times from
                            the NuGet.
                        </p>
                        <p className="u-left-aligned-content">
                            For more information visit
                            <a href="http://blog.ploeh.dk/">
                                Mark Seemann&apos;s website
                            </a>
                        </p>
                    </div>
                </section>
            </div>
            <section className="text-highlight workshop-topic">
                <div className="highlight-content">
                    <h1 className="highlight-heading">Topic</h1>
                    <p className="u-left-aligned-content">
                        Would you like to write readable code? Code that you can
                        understand a year later? Code that your co-workers can
                        understand?
                    </p>
                    <p className="u-left-aligned-content">
                        If so, you need to use good abstractions in your source
                        code. What makes an abstraction good? How do you arrive
                        at good abstractions?
                    </p>
                    <p className="u-left-aligned-content">
                        Most programmers try to ‘invent’ abstractions from
                        scratch. This is an elusive goal. It requires a level of
                        foresight rarely available. What if, instead, you could
                        use existing, universal abstractions?
                    </p>
                    <p className="u-left-aligned-content">
                        For decades, programmers have dreamt of being able to
                        assemble software from building blocks, like Lego
                        bricks. In order to do this, such building blocks must
                        be composable, like Lego bricks. What makes an
                        abstraction composable? It turns out that category
                        theory can teach us about composability. Furthermore, it
                        turns out that some of the most important structural
                        design patterns in the Gang of Four book are special
                        cases of categories.
                    </p>
                    <p className="u-left-aligned-content">
                        Category theory is a branch of mathematics, and so
                        includes objective laws. You can use those laws to
                        determine whether an abstraction is composable – even in
                        object-oriented programming!
                    </p>
                </div>
            </section>
            <section className="text-highlight workshop-goal">
                <div className="highlight-content">
                    <h1 className="highlight-heading">
                        Target audience and goal of the workshop
                    </h1>
                    <p className="u-left-aligned-content">
                        In this workshop, you’ll learn some objective criteria
                        to determine whether a design is composable. No special
                        background in mathematics is required.
                    </p>
                    <p className="u-left-aligned-content">
                        The workshop will include a combination of lecture and
                        exercises, including hands-on programming exercises.
                        You’ll need to bring your own programming environment
                        capable of compiling and running C# code. The fanciest
                        C# features you’ll use is generics, so programmers with
                        only passing familiarity with C# may be able to
                        participate as well.
                    </p>
                    <p className="u-left-aligned-content">
                        This workshop is for object-oriented programmers curious
                        about category theory and functional programming. You’ll
                        see F# and Haskell code examples during the workshop,
                        but you don’t have to know these language; you’ll learn
                        what you need along the way.
                    </p>
                    <p className="u-left-aligned-content">
                        Successful participation in the workshop should enable
                        you to use universal abstractions in your source code.
                        As always, no silver bullet is implied. You will learn
                        about universal abstractions, but it will not magically
                        make all your code instantly perfect.
                    </p>
                </div>
            </section>
            <div className="sponsors-and-ticket-sale-wrapper">
                <section className="text-highlight sponsors">
                    <div className="highlight-content">
                        <p>
                            The workshop would not exist without these
                            forward-thinking companies:
                        </p>
                        <ul className="u-plain-list">
                            <li>
                                <a
                                    href="https://www.nordsafety.com/?utm_source=triplet&utm_medium=website&utm_campaign=workshop"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="workshop-sponsor-logo"
                                        src="https://triplet-assets.s3.amazonaws.com/workshops/nordsafety_logo_horizontal.svg"
                                        alt="NordSafety logo"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://gofore.com/en/home/?utm_source=triplet&utm_medium=website&utm_campaign=workshop"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="workshop-sponsor-logo"
                                        src="https://triplet-assets.s3.amazonaws.com/workshops/gofore.svg"
                                        alt="Gofore logo"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="call-to-action workshop-buy-tickets">
                    <h1 className="call-to-action-header">
                        <a href="https://holvi.com/shop/triplet/product/8fe09e54603a27c993ba59a9d8c51c2d/">
                            Buy tickets from Holvi
                        </a>
                    </h1>
                </section>
            </div>
        </section>
    </ContentWithLogo>
)

export default MarkSeemannWorkshop

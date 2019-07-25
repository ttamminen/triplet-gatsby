import React from "react"
import PropTypes from "prop-types"

// let inlinedStyles = ``
// if (process.env.NODE_ENV === `production`) {
//     try {
//         inlinedStyles = require(`../public/styles.css`)
//     } catch (e) {
//         console.log(e)
//     }
// }

export default class HTML extends React.Component {
    static propTypes = {
        headComponents: PropTypes.any,
        body: PropTypes.any,
        postBodyComponents: PropTypes.any,
    }

    render() {
        let css
        // if (process.env.NODE_ENV === `production`) {
        //     css = (
        //         <style
        //             id="gatsby-inlined-css"
        //             dangerouslySetInnerHTML={{ __html: inlinedStyles }}
        //         />
        //     )
        // }
        const { headComponents, body, postBodyComponents } = this.props
        return (
            <html lang="en">
                <head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />

                    {/* Mobile Meta */}
                    <meta name="HandheldFriendly" content="True" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />

                    {/* Styles'n'Scripts */}

                    {headComponents}
                    {css}
                </head>
                <body className="din-thin-loaded din-regular-loaded">
                    <div
                        id="___gatsby"
                        dangerouslySetInnerHTML={{ __html: body }}
                    />
                    {postBodyComponents}
                </body>
            </html>
        )
    }
}

import React from "react"
import Helmet from "react-helmet"
import config from "../../utils/siteConfig"

import "../../styles/main.scss"

export default class MainLayout extends React.Component {
    render() {
        const { children } = this.props
        return (
            <div>
                <Helmet>
                    <title>{`${
                        config.siteTitle
                    } |  ${this.getLocalTitle()}`}</title>
                    <meta name="description" content={config.siteDescription} />
                </Helmet>
                {children}
            </div>
        )
    }
}

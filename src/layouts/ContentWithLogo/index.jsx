import React from "react"

import CompanyLogoHeader from "../../components/CompanyLogoHeader/CompanyLogoHeader"

import "./styles.css"

class ContentWithLogo extends React.Component {
    render() {
        const { children } = this.props

        return (
            <div>
                <CompanyLogoHeader />
                <div className="page-wrap">{children}</div>
            </div>
        )
    }
}

export default ContentWithLogo

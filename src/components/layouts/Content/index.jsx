import React from "react"

import "./styles.css"

class Content extends React.Component {
    render() {
        const { children } = this.props

        return <div className="page-wrap">{children}</div>
    }
}

export default Content

import React from 'react'

function Alert(props) {
    return (
        <div className="alert-container">
            <div className={"animated bounceInUp alert alert-" + props.type}>
                <h4 className="alert-title">{ props.title }</h4>
                <p className="alert-text">{ props.text }</p>
            </div>
        </div>
    )
}

export default Alert

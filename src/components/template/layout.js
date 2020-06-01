import React from 'react'

export default function Layout({ header={}, classNames={}, ...props }) {
    console.log(header, classNames, props)
    return (
        <div className={classNames.header || ''}>
            <h2>{header.name || "no name"}</h2>
            <div className={`body ${classNames.body || ''}`}>
                {props.children}
            </div>
        </div>
    )
}

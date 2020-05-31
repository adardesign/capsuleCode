import React from 'react'

export default function Layout({ header, childern, classNames }) {
    return (
        <div className={classNames.header}>
            <h2>{header.name}</h2>
            <div className={`body ${classNames.body}`}>
                {childern}
            </div>
        </div>
    )
}

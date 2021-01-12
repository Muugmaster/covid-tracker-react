import React from 'react'

const Deaths = ({total, today}) => {
    return (
        <div className="data-container">
            <h2>Total Deaths</h2>
            <p>{total}</p>
            <h2>Deaths Today</h2>
            <p>{today}</p>
        </div>
    )
}

export default Deaths

import React from 'react'

const Cases = ({total, today}) => {
    return (
        <div className="data-container">
            <h2>Total Cases</h2>
            <p>{total}</p>
            <h2>Cases Today</h2>
            <p>{today}</p>
        </div>
    )
}

export default Cases

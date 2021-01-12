import React from 'react'

const Recover = ({total, today}) => {
    return (
        <div className="data-container">
            <h2>Total Recoveries</h2>
            <p>{total}</p>
            <h2>Recoveries Today</h2>
            <p>{today}</p>
        </div>
    )
}

export default Recover

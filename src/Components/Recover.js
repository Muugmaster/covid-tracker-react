import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup';

const Recover = ({total, today}) => {
    const [totalRecos, setTotalRecos] = useState(0)
    const [totalRecosToday, setTotalRecosToday] = useState(0)

    useEffect(() => {
     setTotalRecos(total)
     setTotalRecosToday(today)   
    }, [total, today])

    return (
        <div className="data-container">
            <h2>Total Recoveries</h2>
            <CountUp start={0} end={parseInt(totalRecos)} />
            <h2>Recoveries Today</h2>
            <CountUp start={0} end={parseInt(totalRecosToday)} />
        </div>
    )
}

export default Recover

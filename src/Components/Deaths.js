import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup';

const Deaths = ({total, today}) => {
    const [totalDeaths, setTotalDeaths] = useState(0)
    const [totalDeathsToday, setTotalDeathsToday] = useState(0)

    useEffect(() => {
     setTotalDeaths(total)
     setTotalDeathsToday(today)   
    }, [total, today])

    return (
        <div className="data-container">
            <h2>Total Deaths</h2>
            <CountUp start={0} end={parseInt(totalDeaths)} />
            <h2>Deaths Today</h2>
            <CountUp start={0} end={parseInt(totalDeathsToday)} />
        </div>
    )
}

export default Deaths

import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup';

const Cases = ({total, today}) => {
    const [totalCases, setTotalCases] = useState(0)
    const [totalCasesToday, setTotalCasesToday] = useState(0)

    useEffect(() => {
     setTotalCases(total)
     setTotalCasesToday(today)   
    }, [total, today])
    

    return (
        <div className="data-container">
            <h2>Total Cases</h2>
            <CountUp start={0} end={parseInt(totalCases)} />
            <h2>Cases Today</h2>
            <CountUp start={0} end={parseInt(totalCasesToday)} />
        </div>
    )
}

export default Cases

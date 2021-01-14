import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

import death from '../images/grave.svg';
import virus from '../images/virus.svg';
import reco from '../images/health-insurance.svg';

const Cards = ({titleToday, titleTotal, total, today}) => {
    const [totalCases, setTotalCases] = useState(0)
    const [totalCasesToday, setTotalCasesToday] = useState(0)
    const [img, setImg] = useState();

    useEffect(() => {
     setTotalCases(total)
     setTotalCasesToday(today)
     if (titleToday === "Cases Today") {
         setImg(virus)
     } else if (titleToday === "Deaths Today") {
         setImg(death)
     } else {
         setImg(reco)
     }
    }, [total, today, titleToday])
    

    return (
        <div className="data-container">
            <img className="container-logo" src={img} alt=""/>
            <h2>{titleTotal}</h2>
            <CountUp start={0} end={parseInt(totalCases)} />
            <h2>{titleToday}</h2>
            <CountUp start={0} end={parseInt(totalCasesToday)} />
        </div>
    )
}

export default Cards

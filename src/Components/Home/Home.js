import React, { useEffect, useState } from 'react';
import './Home.css';
import RiderData from '../../Data/RiderData';
import DisplayHome from '../DisplayHome/DisplayHome';

function Home() {
    const [riders, setRiders] = useState([]);
    useEffect(() => {
        setRiders(RiderData);
        console.log(RiderData);
    }, []);
    return (
        <div className="ui-bg">
            <div className="card-background">
            {
                riders.map(rider => 
                    <DisplayHome rider ={rider}></DisplayHome>)
            }
            </div>
        </div>
    );
}

export default Home;
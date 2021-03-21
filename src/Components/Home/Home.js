import React, { useEffect, useState } from 'react';
import './Home.css';
import DisplayHome from '../DisplayHome/DisplayHome';

function Home() {
    let RiderData = [
        {
            "id": "BRXGEX01",
            "name": "Bike",
            "image": "https://i.ibb.co/1fTCVcJ/Frame.png"
        },
        {
            "id": "CRXGEX02",
            "name": "Car",
            "image": "https://i.ibb.co/r48qSxW/Frame-2.png"
        },
        {
            "id": "GRXGEX03",
            "name": "Bus",
            "image": "https://i.ibb.co/m91wW48/Frame-1.png"
        },
        {
            "id": "MRXGEX04",
            "name": "Metro Rail",
            "image": "https://i.ibb.co/wWTzDVQ/Group.png"
        }
    ]
    return (
        <div className="ui-bg">
            <div className="card-background">
            {
                RiderData.map(rider => 
                    <DisplayHome key={rider.id} rider ={rider}></DisplayHome>)
            }
            </div>
        </div>
    );
}

export default Home;
import React from 'react';
import './Destination.css';
// import { Link, useParams } from 'react-router-dom';
import image from '../../images/Map.png';

const Destination = () => {
    // const {id} = useParams();
    return (
        <div classNameName="mapping-body">
            <div classNameName="mapping-field">
                <div className="input-div">
                    <input type="date"/>
                    <input type="text" placeholder="Pickup From" />
                    <input type="text" placeholder="Pickup To" />
                    <input className="search-in" type="submit" value="Search Location" />
                </div>
                <img className="map-img" src={image} alt="" />
            </div>
        </div>
    );
};

export default Destination;


// <div style={{textAlign: 'center'}}>
//             <h1>Let's ride a {id} new car.</h1>
//             <p><Link style={{color: "white", fontSize: "25px"}} to="/home">Want a different ride?</Link></p>
//         </div>
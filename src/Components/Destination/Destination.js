import React from 'react';
import './Destination.css';
import { Link, useParams } from 'react-router-dom';

const Destination = () => {
    const {id} = useParams();
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Let's ride a {id} new car.</h1>
            <p>Want a <Link to="/home">different ride?</Link> </p>
        </div>
    );
};

export default Destination;
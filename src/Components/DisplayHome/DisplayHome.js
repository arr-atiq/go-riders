import React from 'react';
import './DisplayHome.css';
import { useHistory } from 'react-router-dom';

export default function DisplayHome({rider}){
    const history = useHistory()
    const handleBook = (id) => {
        history.push(`/destination/${id}`);
    }
    return (
        <div className="rider-interface">
           <div className="card-content">
               <img src={rider.image} alt=""/>
               <button onClick={() => handleBook(rider.id)}>{rider.name}</button>
           </div>
        </div>
    );
}







// const DisplayHome = (props) => {
//     const { name, image, id } = props.rider;
    // return (
    //     <div className="rider-interface">
    //        <div className="card-content">
    //            <img src={image} alt=""/>
    //            <button> <Link to={"/destination/"+id}>{name}</Link> </button>
    //        </div>
    //     </div>
    // );
// };

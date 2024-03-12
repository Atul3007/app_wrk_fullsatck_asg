import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css'

function Transcation(){
    
    const [transcation, setTranscation] = useState([]);

    useEffect(()=>{
        getAllTranscation();
    },[])

    const getAllTranscation = async () => {
        try {
            const data = await axios.get('http://localhost:8080/api/all-trans');
            setTranscation(data.data.result);
        } catch (error) {
            console.log("error in getting data");
        }
    }

    return(
        <div>
        <h2>Transcation Details</h2>
        <Link to={'/add-transcation/'}>
        <button>Add Transcation</button>
        </Link>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Credit</th>
                        <th>Debit</th>
                        <th>Running Balance</th>
                    </tr>
                </thead>
                <tbody>
                   {transcation.map((e,index)=> {
                    return (
                    <tr key={index}>
                        <td>{e.date}</td>
                        <td>{e.description}</td>
                        <td>{e.credit}</td>
                        <td>{e.debit}</td>
                        <td>{e.runningBalance}</td>
                    </tr>
                   )})}
                </tbody>
            </table>
        </div>
    );
}

export default Transcation;
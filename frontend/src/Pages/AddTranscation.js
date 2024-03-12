import React, { useState } from "react";
import axios from "axios";
import '../App.css'

function AddTransaction() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("credit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      if (transactionType === "credit") {
        const data = await axios.post(
          "http://localhost:8080/api/credit-trans",
          { description, credit: amount } 
        );
        if(data){
        alert("Credited");
        window.location.href='/';
    }else{
        alert("Error occured")
      }
      } else {
        const data = await axios.post(
            "http://localhost:8080/api/debit-trans",
            { description, debit: amount } 
          );
          if(data){
          alert("Debited");
          window.location.href='/';
          }else{
            alert("Error occured")
          }
      }
    } catch (error) {
      console.error("Error on submitting:", error);
    }
  };
  

  return (
    <div id="editform">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Description:{" "}
          <input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Transaction Type:
          <select
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
          >
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
        </label>
        <br />
        <label>
          Amount:{" "}
          <input
            type="number"
            placeholder="enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;

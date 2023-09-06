import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import doof from "../assets/Doofenshmirtz_Portrait.jpeg";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const getQuote = async () => {
      const count = await axios.get("http://localhost:8800/count");
      const id = {
        id: Math.floor(Math.random() * count.data[0]["COUNT(*)"]) + 1,
      };
      const q = await axios.post("http://localhost:8800/get-quote", id);
      setQuote(q.data[0][0]["quote"]);
      console.log(count);
      console.log(count.data[0]["COUNT(*)"]);
      console.log(id);
      console.log(q.data[0][0]["quote"]);
    };
    getQuote();
  }, []);

  return (
    <>
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Doof once said</h2>
        <div style={{ padding: "20px" }}>{quote} - Doofenshmirtz</div>
        <img
          src={doof}
          alt="Doof"
          style={{ width: "400px", height: "500px" }}
        ></img>
      </div>
    </>
  );
};

export default Quotes;

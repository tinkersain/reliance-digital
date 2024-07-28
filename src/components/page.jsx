import axios from "axios";
import React, { useState } from "react";
export default function Demo() {
  const [name, setname] = useState("Aditya");
  const handleClick = async () => {
    await axios
      .post("/getname")
      .then((res) => {
        console.log(res.data);
        setname(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>Hello My name is {name}</div>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

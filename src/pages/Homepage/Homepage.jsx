import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "../../components/Navbar/Navbar";
import Mainslider from "../../components/Mainslider/Mainslider";

function Homepage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Mainslider />
    </>
  );
}

export default Homepage;

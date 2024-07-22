import React from "react";
import Carousel from "../Carousel/Carousel";
import "./Mainslider.css";
import { Image } from "@chakra-ui/react";
import useWindowWidth from "../useWindoWidth/useWindowWidth";

function Mainslider() {
  const width = useWindowWidth();
  const items = [
    <div style={{ backgroundColor: "red" }}>
      <Image
        src="https://www.reliancedigital.in/medias/Apple-AirPods-Pro-Banner-D-1-.jpg?context=bWFzdGVyfGltYWdlc3w3OTM4MHxpbWFnZS9qcGVnfGltYWdlcy9oOWEvaGJkLzEwMTc0MjE5MDU5MjMwLmpwZ3xjMThlZWY2MWU3YTVmOTA0ZTBmZjZiYzUzOWUzYTJkZjQzMjcxZDJiMDc3NGU3MjIwMWIwYTIyZmJjMzQ3ZGM4"
        alt="poster"
      />
    </div>,
    <div style={{ backgroundColor: "green" }}>
      <Image
        src="https://www.reliancedigital.in/medias/Big-TV-Fest-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxNDc4NjJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDNlL2g1OC8xMDE3MDQwMTQyMzM5MC5qcGd8NjZiYjRlYTViNjg4OGFmMGMyZDJlMmExZDRmNWUyZWQ5NTAwZThkYjAxODMyOTM2YWVmNDE2MWJlNzE3NDYzZQ"
        alt="poster"
      />
    </div>,
    <div style={{ backgroundColor: "blue" }}>
      <Image
        src="https://www.reliancedigital.in/medias/OnePlus-Nord4-Pre-book-1365x260px-1-.jpg?context=bWFzdGVyfGltYWdlc3w5NTU0N3xpbWFnZS9qcGVnfGltYWdlcy9oNDcvaDNiLzEwMTc0MzE3MzMwNDYyLmpwZ3xlODNiMGZiZWNmYTQ3Yjc0YmE4YjcwM2E2NGI2MDk5ZTg0ZGQ0NjYyN2FlOTRlMTAyMjcyMmE3MTNkM2I1YmVi"
        alt="poster"
      />
    </div>,
    <div style={{ backgroundColor: "yellow" }}>
      <Image
        src="https://www.reliancedigital.in/medias/Monsoon-Sale-HPMC-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxNzM5NzZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDE3L2gwZi8xMDE2MDMyNjIxMzY2Mi5qcGd8NjAzNDVmNWYxN2ZhZjJiODJjNDAzYzY0YTI5MWE0MDY3N2I5MzA4MWFmOWFjNDM0MjM2NjE0N2RjYWYxNDIyMw"
        alt="poster"
      />
    </div>,
    <div style={{ backgroundColor: "yellow" }}>
      <Image
        src="https://www.reliancedigital.in/medias/Boot-Up-India-Banner-D-with-JBL-HPMC-240627.jpg?context=bWFzdGVyfGltYWdlc3wxNTUxNTd8aW1hZ2UvanBlZ3xpbWFnZXMvaDZjL2hhNC8xMDE2NTY3OTQyMzUxOC5qcGd8Y2I4YzU0OWFmNWQ5Y2U0ZGNjZmQ2YTc1ZmMwOWY1ZjNkOTI0NzhlZjc5YzJhNDMwNjMxMTI3OGExYTAyZDRjZg"
        alt="poster"
      />
    </div>,
  ];
  const getCropDimensions = (windowWidth) => {
    if (windowWidth < 600) {
      return { width: "100%", height: "auto" }; // Adjust for small screens
    } else if (windowWidth < 1200) {
      return { width: "75%", height: "auto" }; // Adjust for medium screens
    } else {
      return { width: "50%", height: "auto" }; // Adjust for large screens
    }
  };

  const { width: cropWidth, height: cropHeight } = getCropDimensions(width);
  return (
    <div className="main-slider">
      <div className="upper-image">
        <Image
          src="https://www.reliancedigital.in/medias/Digital-India-Sale-Banner-weekend-D-20-21-Jul.jpg?context=bWFzdGVyfGltYWdlc3wxODk0Mzd8aW1hZ2UvanBlZ3xpbWFnZXMvaGJlL2hiNi8xMDE3Mzk1MzM0MzUxOC5qcGd8MTE4YjU5YTM3NTJkOTc4MTdmNWRiNmMwNTdhMmMzMWNiMDM0OTAwYzRhMjA4YWIyNDNmNjdkNTJhN2Y2ZjdjNw"
          alt="banner"
        />
      </div>
      <Carousel items={items} />
    </div>
  );
}

export default Mainslider;

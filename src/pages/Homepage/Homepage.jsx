import { useEffect, useState } from "react";
import {
  television,
  earphones,
  waterPurifers,
  banners,
  Explore1,
} from "./data";
import Navbar from "../../components/Navbar/Navbar";
import Mainslider from "../../components/Mainslider/Mainslider";
import NextCarousel from "./NextCarousel";
import { Button, Divider } from "@chakra-ui/react";
import ProductSwipe from "../../components/ProductSwipe/ProductSwipe";

function Homepage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Mainslider />

      <div className="tel-carousel">
        <div className="header-tel">
          <p>
            Upgrade to Premium LED TVs | No Cost EMI Offers available on top
            brands
          </p>
          <Button
            style={{
              background: "#003380",
              borderRadius: "0",
              paddingLeft: "4",
              paddingRight: "4",
              color: "white",
            }}
          >
            View All
          </Button>
        </div>
        <NextCarousel items={television} />
      </div>

      <Divider paddingTop="2%" paddingBottom={"2%"} />

      <div className="tel-carousel">
        <div className="header-tel">
          <p>Best Selling Audio Accessories</p>
          <Button
            style={{
              background: "#003380",
              borderRadius: "0",
              paddingLeft: "4",
              paddingRight: "4",
              color: "white",
            }}
          >
            View All
          </Button>
        </div>
        <NextCarousel items={earphones} />
      </div>

      <Divider paddingTop="2%" paddingBottom={"2%"} />

      <div className="tel-carousel">
        <div className="header-tel">
          <p>Splash Into Savings | 45% Off Water Purifiers!</p>
          <Button
            style={{
              background: "#003380",
              borderRadius: "0",
              paddingLeft: "4",
              paddingRight: "4",
              color: "white",
            }}
          >
            View All
          </Button>
        </div>
        <NextCarousel items={waterPurifers} />
      </div>

      {/* <CarouselRevamped items={banners} /> */}
      <Divider paddingTop="2%" paddingBottom={"2%"} />
      <ProductSwipe items={Explore1} />
    </>
  );
}

export default Homepage;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import Slider from "react-slick";

import obra1 from "../../public/main/obra1.jpg";
import obra2 from "../../public/main/obra2.jpg";
/* import obra3 from "../../public/main/obra3.jpg";
import obra4 from "../../public/main/obra4.jpg";
import obra5 from "../../public/main/obra5.jpg"; */

const Carousel = () => (
  <div className="overflow-hidden">
    <Slider {...settings}>
      {items.map((item) => (
        <div className="h-70 sm:h-160">
          <Image {...item} />
        </div>
      ))}
    </Slider>
  </div>
);

export default Carousel;

const items = [
  {
    src: obra1,
    alt: "obra1",
  },
  {
    src: obra2,
    alt: "obra2",
  },
  /* {
    src: obra3,
    alt: "obra3",
  }, 
  {
    src: obra4,
    alt: "obra4",
  },
  {
    src: obra4,
    alt: "obra5",
  },*/
];

const settings = {
  dots: false,
  infinite: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  draggable: false,
  pauseOnDotsHover: false,
  pauseOnFocus: false,
  pauseOnHover: false,
};

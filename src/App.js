import React from "react";
import Slider from "react-slick";
import "./App.css";
import BasicCard from "./Card";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      NEXT
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      BACK
    </div>
  );
}

export default function App() {
  const slider = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0px" }}>
        REACT-SLICK CAROUSEL
      </h1>

      <div style={{ margin: 20 }}>
        <button onClick={() => slider?.current?.slickPrev()}>Prev</button>
        <button
          style={{ marginLeft: 20 }}
          onClick={() => slider?.current?.slickNext()}
        >
          Next
        </button>
      </div>

      <Slider ref={slider} {...settings}>
        {products?.map((item, index) => {
          return <BasicCard item={item} />;
        })}
      </Slider>
    </div>
  );
}

const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlnaCUyMHJlc29sdXRpb258ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: 2,
    image: "https://cdn.pixabay.com/photo/2020/02/13/06/49/seascape-4844697__480.jpg",
  },
  {
    id: 3,
    image: "https://img.freepik.com/premium-photo/high-resolution-easter-sunday-concept-empty-tomb-stone-with-cross-meadow-sunrise-3d-rendering_415584-81.jpg?w=2000",
  },
  {
    id: 4,
    image: "https://c4.wallpaperflare.com/wallpaper/636/592/951/beach-1920x1080-high-definition-wallpaper-preview.jpg",
  },

  {
    id: 5,
    image: "https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg?cs=srgb&dl=pexels-pixabay-220769.jpg&fm=jpg",
  },
  {
    id: 6,
    image: "https://lh3.googleusercontent.com/qZ6uF2t62wIbuovRoPwZ8_plopGdeYz7iGhzROPaI5Slk19PlT7HojPTCCJd9r0B2sJDernKJB0giA_l1xvo8Kh6rg=w640-h400-e365-rj-sc0x00ffffff",
  },
];

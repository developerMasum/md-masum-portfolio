import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

let data = [
  {
    img: "https://i.ibb.co/HKGFRZF/Screenshot-2023-06-27-095658.png",
    disc: "Dance school website made by MERN Stack. Admin,Instructors and Students user friendly. for test-admin:test@",
    liveLink: "https://groove-and-go.web.app/",
    clientGit: "https://github.com/developerMasum/Dance-School",
    serverGit: "https://github.com/developerMasum/Dance-school-server-",
  },
  {
    img: "https://i.ibb.co/BtvwLsJ/Screenshot-2023-06-27-100748.png",
    disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    liveLink: "https://new-test-6cb41.web.app/",
    clientGit: "https://github.com/developerMasum/Car-toy-world",
    serverGit: "https://github.com/developerMasum/Car-toy-world-backend",
  },
  {
    img: "https://i.ibb.co/pyWgYXJ/Screenshot-2023-06-27-100920.png",
    disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    liveLink: "https://chef-websi.web.app/",
    clientGit: "https://github.com/developerMasum/Turkey-Chef-Association-Client-side",
    serverGit: "https://github.com/developerMasum/Turkey-Chef-Association-Server-Side",
  },
  {
    img: "https://i.ibb.co/3c11g4p/Screenshot-2023-06-27-101330.png",
    disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",

    liveLink: "https://next-page.netlify.app/",
    clientGit: "https://github.com/developerMasum/NextPageBook",

  },
  {
    img: "https://i.ibb.co/5jSQPKf/Screenshot-2023-06-27-101848.png",
    disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    // liveLink: "Coming sooooooon",
    // clientGit: "Coming sooooooon",
    // serverGit: "Coming sooooooon",
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;

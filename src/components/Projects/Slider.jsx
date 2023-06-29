import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

let data = [
  {
    img: "https://i.ibb.co/HKGFRZF/Screenshot-2023-06-27-095658.png",
    disc: "Flaire Dance School'(Full MERN stack)' After register a user can buy classes by stripe payment,user can show thir Payment history. Instructors can add classes. Admin can approve, delete and show details about users. admin:test@gmail.com,Pass: 123456A@",
    liveLink: "https://groove-and-go.web.app/",
    clientGit: "https://github.com/developerMasum/Dance-School",
    serverGit: "https://github.com/developerMasum/Dance-school-server-",
  },
  {
    img: "https://i.ibb.co/5jSQPKf/Screenshot-2023-06-27-101848.png",
    disc: "BentilZone Restuarent '(MERN Stack)' In this website Foods are design as category. Admin can add food item and also make a user as admin. user can buy product also can payment by stripe. user can see their cart and payment history. admin:test@gmail.com,Pass: 12345A@",
    liveLink: "https://bentilzone-restuarent.web.app/",
    clientGit: "https://github.com/developerMasum/Bentilzone-Client-side-",
    serverGit: "https://github.com/developerMasum/Bentilzone-server-side",
  },
  {
    img: "https://i.ibb.co/pyWgYXJ/Screenshot-2023-06-27-100920.png",
    disc: " 'Turkey Chefs Association'  This website initially  shows different chefs in Turkey, after successfully logged in, user can show Chef details and their recipes and also their top recipe details. User can  mark as favorite item of all  chief’s recipes in their recipe details page . ",
    liveLink: "https://chef-websi.web.app/",
    clientGit: "https://github.com/developerMasum/Turkey-Chef-Association-Client-side",
    serverGit: "https://github.com/developerMasum/Turkey-Chef-Association-Server-Side",
  },
  {
    img: "https://i.ibb.co/3c11g4p/Screenshot-2023-06-27-101330.png",
    disc: "Next Page , In this website anyone can show books and they can purchase it easily ",

    liveLink: "https://next-page.netlify.app/",
    clientGit: "https://github.com/developerMasum/NextPageBook",

  },
  {
    img: "https://i.ibb.co/BtvwLsJ/Screenshot-2023-06-27-100748.png",
    disc: "CAR TOY WORLD' (CURD operations of MongoDB) In this website A successful logged user can add their toys for sell. also in this website everybody can see the toys, Every logged user can buy it after filling delivery details. User can delete and update orders..",
    liveLink: "https://new-test-6cb41.web.app/",
    clientGit: "https://github.com/developerMasum/Car-toy-world",
    serverGit: "https://github.com/developerMasum/Car-toy-world-backend",
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

import React from "react";
import styled from "styled-components";
import { AiFillMail,  } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";
import img from '../../Img/WhatsApp Image 2023-06-26 at 20.41.59.png'
import cv from '../../Img/Resume-Dev md masum.pdf'

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4 className="text-xl">
            Hello there ... <span className="green text-xl "></span>
            <h6 className="text-5xl font-thin mb-0">Masum</h6>
          </h4>

          <p className=" text-lg flex gap-3 pb-2">
            {" "}
            I am passionate
            <span className="green text-2xl">
              <Typewriter
                options={{
                  strings: [
                    "MERN Stack Developer",
                    "Web Developer",
                    "React Developer",
                    "JavaScript Developer",
                    "Tailwind Expert",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
          <p>
            I'm from Dhaka,Bangladesh with rock solid experience in building
            complex application with modern technologies 📍
          </p>
          <div className="flex gap-3 pt-0 mt-0">
            <button>
            <a href={cv}> Download CV </a>
              </button>
            <button>
            <a href="tel:+8801704987382">Let's talk</a>
              </button>
          </div>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="mailto:md.masum0058@gmail.com">
                  <AiFillMail />
                </a>
              </span>
              <span>
                <a href="https://www.facebook.com/f.adnan.masum/">
                  <FaFacebook />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/md-masum-b2a551280/">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src={img}
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
img {
  width: 35rem;
  filter: drop-shadow(0px 10px 10px #01be9570);
  transition: transform 400ms ease-in-out;

  @media (max-width: 790px) {
    width: 20rem;
  }

  @media (max-width: 660px) {
    width: 25rem;
  }

  @media (max-width: 640px) {
    width: 100%;
    max-width: 25rem;
    margin-top: 2rem;
  }
}

:hover img {
  transform: translateY(-10px);
}
`;

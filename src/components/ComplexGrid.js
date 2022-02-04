import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Image from "react-bootstrap/Image";
import audio from "../images/AUDIO FIRST.jpg";
import elegance from "../images/ELEGANCE.jpg";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const ComplexGrid = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const rowDict1 = {
    1: {
      img: audio,
      title: "AUDIO FIRST",
      desc: "Without our dedication to perfecting the audio experience, nothing else matters.We are audiophiles who want the best for ourselves and our customers.  After so many years, listening sessions still bring a smile and a tapping foot.Professionals can count on the utmost in sound quality for production and mixing.  This affords artists their ultimate expression.  ",
    },
    2: {
      img: audio,
      title: "QUALITY",
      desc: "Α big part of our mission is to build quality that we can be proud of and that you will have confidence you can enjoy your audio journey for a long time to come.  We also want to ensure that the resell value remains high.  By using premium parts and ensuring quality through strict quality control standards, we can be confident that every customer will enjoy their entire experience.",
    },
    3: {
      img: audio,
      title: "ELEGANCE",
      desc: "We strive to build our products with a designer’s eye.  We work with material and artistic experts to add that something extra to our products that help us to stand out in this space. A designer’s dream for integrating audio into your special living space.",
    }}

  const  rowDict2 = {
    1: {
      img: audio,
      title: "INNOVATION",
      desc: "To meet our product development aspirations, we continuously have to innovate.  This is particularly evident in our focus on amplifier architecture, circuit topology, clean and reliable power supplies and our careful approach to miniaturization.",
    },
    2: {
      img: audio,
      title: "MODERN",
      desc: "From our parts selection through our tooling we look to leverage the best with an eye on future proofing our products and methods.  Integrated electronics and 3D modeling software help us streamline our designs, reduce errors while improving our ability to meet our design goals with every product.",
    },
    3: {
      img: audio,
      title: "THE CHAIN",
      desc: "In all audio systems it is critical to remove any weak links.  Our amplifiers have the ability to bring out the best of your investments in DACs, headphones and cables.  Driving headphones correctly means you get a wider soundstage, better placement of instruments and better control at the top and bottom of the audio spectrum.",
    },
  };

  const cardStyles = { back: { display: "flex", justifyContent: "center" } };
  return (
    <Container fluid className="photogrid">
      <Row className="text-center p-3 ">
        <Col >
          <ReactCardFlip
            cardStyles={cardStyles}
            isFlipped={isFlipped}
            flipDirection={"horizontal"}
          >
            <Image onMouseOver={handleClick} src={audio} width={250}></Image>
            {/* <Image onMouseOver={handleClick} src={audio} width={250}></Image> */}

            <Card
              onMouseLeave={handleClick}
              border="light"
              style={{ width: "250px", height: "166.67px" }}
              className="text-white"
            >
              <Card.Body style={{ backgroundColor: "#3c3c3c" }}>
                <Card.Text className="text-center " style={{ fontSize: "9px" }}>
                  Without our dedication to perfecting the audio experience,
                  nothing else matters. We are audiophiles who want the best for
                  ourselves and our customers. After so many years, listening
                  sessions still bring a smile and a tapping foot. Professionals
                  can count on the utmost in sound quality for production and
                  mixing. This affords artists their ultimate expression.
                </Card.Text>
              </Card.Body>
            </Card>
          </ReactCardFlip>
        </Col>
        <Col>
          <Image src={audio} width={250}></Image>
        </Col>
        <Col>
          <Image src={audio} width={250}></Image>
        </Col>
      </Row>
      <Row className="text-center p-3">
        <Col>
          <Image src={audio} width={250}></Image>
        </Col>
        <Col>
          <ReactCardFlip
            cardStyles={cardStyles}
            isFlipped={isFlipped}
            flipDirection={"horizontal"}
          >
            <Card
              onMouseOver={handleClick}
              border="light"
              className="text-white  "
            >
              <Card.Img src={elegance} alt="Card image" />
              <Card.ImgOverlay style={{ top: "30%" }}>
                <Card.Text className="text-center ">
                  Last updated 3 mins ago
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
            {/* <Image onMouseOver={handleClick} src={audio} width={250}></Image> */}

            <Card
              onMouseLeave={handleClick}
              border="light"
              style={{ width: "250px", height: "166.67px" }}
              className="text-white"
            >
              <Card.Body style={{ backgroundColor: "#3c3c3c" }}>
                <Card.Text className="text-center " style={{ fontSize: "9px" }}>
                  Without our dedication to perfecting the audio experience,
                  nothing else matters. We are audiophiles who want the best for
                  ourselves and our customers. After so many years, listening
                  sessions still bring a smile and a tapping foot. Professionals
                  can count on the utmost in sound quality for production and
                  mixing. This affords artists their ultimate expression.
                </Card.Text>
              </Card.Body>
            </Card>
          </ReactCardFlip>
        </Col>
        <Col>
          <Card border="light" className="text-white  ">
            <Card.Img src={elegance} alt="Card image" />
            <Card.ImgOverlay style={{ top: "30%" }}>
              <Card.Text className="text-center ">
                Last updated 3 mins ago
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ComplexGrid;

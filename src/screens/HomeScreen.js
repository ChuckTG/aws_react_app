import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import amp from "../amp.png";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import  audio from "../images/AUDIO FIRST.jpg"
import  elegance from "../images/ELEGANCE.jpg"
import  quality from "../images/QUALITY.jpg"
import  innovation from "../images/INNOVATION.jpg"
import  modern from "../images/MODERN.jpg"
import  thechain from "../images/THE CHAIN.jpg"
import "../custom_css/header.css"
import Pulse from "../components/Pulse"
import React, {useState} from "react";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import ReactCardFlip from 'react-card-flip';
import ComplexGrid from "../components/ComplexGrid"
import FlipImage from "../components/FlipImage";

const HomeScreen = () => {

  const handleClick = (e) => (
    console.log('θα σε γαμησω μωρη πουτανιτσα τι δεν βλεπεις?')
  )
  return (
    <>

    <Pulse />

      <Figure className="py-4" style={{backgroundColor:'#fafafa'}}>
        <Figure.Caption className="p-5 m-4 text-center" style={{color:"#161616"}}>
          To hear pure and complete music without colorization creates an
          experience that presents all auditory queues available in recordings
          against a black background so you can place instruments in space. This
          allows you to experience music as the artist intended and this is the
          foundation of everything we do.{" "}
        </Figure.Caption>
        <Figure.Image className="py-4" src={amp} />
      </Figure>
    



      <ComplexGrid />

      <FlipImage />

      </>
  );
};

export default HomeScreen;

import "./ela.css";
import {Helmet} from "react-helmet";
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./custom_css/header.css";
import logo2 from "./logo2.png";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <>
        <Helmet bodyAttributes={{style:'background-color : #fafafa !important'}}/>
        <Header />
        
        <HomeScreen />
        
    </>
  );
};

export default App;

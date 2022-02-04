import audio from "../images/AUDIO FIRST.jpg";
import ReactCardFlip from "react-card-flip";
import Card from "react-bootstrap/Card"
import React, {useState} from "react";
import elegance from "../images/ELEGANCE.jpg";



const FlipImage = (img) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };
    
    
    const cardStyles={"back":{display:"flex",justifyContent:"center",}}
    
    return (
        <ReactCardFlip cardStyles={cardStyles} isFlipped={isFlipped} flipDirection={"horizontal"}>
        <Card onMouseOver={handleClick} border="light" style={{ width: "250px",height:"166.67px" }} className="text-white  ">
  <Card.Img   src={elegance} alt="Card image" />
  <Card.ImgOverlay style={{top:"30%"}}  >

    <Card.Text   className="text-center ">Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
            {/* <Image onMouseOver={handleClick} src={audio} width={250}></Image> */}
            
            <Card onMouseLeave={handleClick} border="light" style={{ width: "250px",height:"166.67px" }} className="text-white">
              
              <Card.Body style={{backgroundColor:"#3c3c3c"}} >
                <Card.Text className="text-center "style={{fontSize:"9px"}}>
                Without our dedication to perfecting the audio experience, nothing else matters.
We are audiophiles who want the best for ourselves and our customers.  After so many years, listening sessions still bring a smile and a tapping foot.
Professionals can count on the utmost in sound quality for production and mixing.  This affords artists their ultimate expression.  
                </Card.Text>
              </Card.Body>
            </Card>
          </ReactCardFlip>
    )
}
export default FlipImage
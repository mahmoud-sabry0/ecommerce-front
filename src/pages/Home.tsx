import { Col, Row } from "react-bootstrap";
import animationData from "../assets/lottieFiles/clothes.json"
import Lottie from "lottie-react";
import img from "../img/images.jpeg"
// import img1 from "../img/2020457_0.png"
// import img2 from "../img/pngtree-high-end-private-custom-clothing-store-posters-clothing-design-poster-back-picture-image_1084849.jpg"
// import img3 from "../img/images.jpeg"



const Home = () => {

  return <div>
    <Row>
      <Col>
   <div >
    <img style={{ width: 400, height: 400 }} src={img} alt="" />
   </div>
      </Col>
      <Col>
      
       <div style={{ width: 500, height: 500 ,display:"contents"}}>
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
      </Col>
    </Row>
    
  </div>;

};

export default Home;
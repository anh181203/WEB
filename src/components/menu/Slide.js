import React from "react";
import Carousel from "react-bootstrap/Carousel";
import  '../HeaderAndFooter/Header.css'
function Slide() {
  return (
    <div>
      <Carousel fade >
        <Carousel.Item interval= {2000}>
          <img
            className="d-block w-100"
            src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/slide-bg-1.jpg"
            alt="First slide"
          />
           <div className="crs-pra">
            <p>MONA WATCH</p>
            <h1>Đồng hồ classico</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> 
            <button>xem sản phẩm</button>
            </div>
          <Carousel.Caption >

           
                                             
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval= {2000}>
          <img
            className="d-block w-100"
            src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/slide-bg-2.jpg"
            alt="Second slide"
          />
            <div className="crs-pra">
            <p>MONA WATCH</p>
            <h1>Đồng hồ classico</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> 
            <button>xem sản phẩm</button>
            </div>
          <Carousel.Caption >
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    </div>
  );
}

export default Slide;

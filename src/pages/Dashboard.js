import React from 'react';


const Dashboard = () => {
  
    return (
      <div className="container">
      <div id="myslideshow" className="carousel slide carousel-fade" data-ride="carousel">

     
          <div className="carousel-inner">
              <div className="carousel-item active mt-4">
                  <img style={{height :"550px",width:"100%"}} src="https://www.montereystagecoachlodge.com/gallery-images/properties/2/4/2/home.jpg" alt="img"
                      className="d-block w-100 "/>
              </div>
              <div className="carousel-item mt-4">
                  <img style={{height :"550px"}} src="https://www.montereystagecoachlodge.com/assets/B/themes/montereystagecoachlodge/img/gallery2.jpg"
                      alt="" className="d-block w-100"/>
              </div>
              <div className="carousel-item mt-4">
                  <img style={{height :"550px"}} src="https://www.montereystagecoachlodge.com/assets/B/themes/montereystagecoachlodge/amp/img/guest-room.jpg"
                      alt="" className="d-block w-100 "/>
              </div>
          </div>
             </div>
             </div>
    );


      
  
};



export {Dashboard};

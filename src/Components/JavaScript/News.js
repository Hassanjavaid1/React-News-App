// import React, { useEffect } from "react";
// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";
// import first from "../Images/First_img.jpg";
// import second from "../Images/Second_img.jpg";
// import third from "../Images/third_img.jpg";
// import "../CSS/News.css";
// function News() {
//   const spanStyle = {};

//   const divStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundSize: "cover",
//     height: "26rem",
//     width: "46rem",
//     boxShadow: 'inset -1rem -9rem 7rem 20px #000000e6',
//     postion:'absolute',
//     gap:'3rem'
//   };
//   const slideImages = [
//     {
//       url: first,
//       caption:
//         "Lorem ipsum dolor sit, amet tio ex quibusdam quidem placeat odit eveniet.",
//     category:'Business',
//     time:' Jan 01, 2045'
//       },
//     {
//       url: second,
//       caption:
//         "Lorem ipsum dolor sit,endis ratione quisquam? Est, sequi tempore.",
//        category:'Health',
//        time:' Jan 01, 2045'
//       },
//     {
//       url: third,
//       caption:
//         "Lorem ipsum,Ad vitae tenetur, totam sint accusantium porro error, corrupti ipsam. Iure.",
//     category:'Finance',
//     time:' Jan 01, 2045'
//       },
//   ];
//   return (
//     <>
//       <div className="headline">
//       <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src={second} class="d-block w-100" alt="..."/>
//       <div class="carousel-caption d-none d-md-block">
//         <h5>First slide label</h5>
//         <span className ="headline_title" style={spanStyle}>Some representative placeholder content for the first slide.</span>
//       </div>
//     </div>
//     < class="carousel-item">
//       <img src={first} class="d-block w-100" alt="..."/>
//       < class="carousel-caption d-none d-md-block">
//       <div className="slide_title">
//                   <div className="time_category">
//                     <h3 className="news_category badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2">Business</h3>
//                     <p className="news_time">Jun 29 November 2923</p>
//                   </div>
//                 <span className ="headline_title" style={spanStyle}>Some representative placeholder content for the first slide.</span>
//                 </div>
              
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
      
        {/* <Slide>
          {slideImages.map((slideImage, index) => (
            <div id="img_slider" key={index}>
              <div 
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              className="slide_bg">
                <div className="slide_title">
                  <div className="time_category">
                    <h3 className="news_category badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2">{slideImage.category}</h3>
                    <p className="news_time">{slideImage.time}</p>
                  </div>
                <span className ="headline_title" style={spanStyle}>{slideImage.caption}</span>
                </div>
              </div>
            </div>
          ))}
        </Slide> */}
//       </div>
//     </>
//   );
// }
// export default News;

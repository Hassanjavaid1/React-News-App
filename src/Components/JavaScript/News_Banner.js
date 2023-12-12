import React, { useEffect, useState } from "react";
import { Slide, Fade } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import no_image from "../Images/no-image.png";
import "../CSS/News.css";
function News_Banner({ businessData }) {
  const [bannerData, setBannerData] = useState([]);

  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    background_repeat: "no-repeat",
    height: "400px",
    boxShadow: "rgb(11 12 0 / 65%) 0rem -2rem 14.7rem 13.3rem inset",
  };
  useEffect(() => {
    if (businessData) {
      setBannerData(businessData);
    }
  }, [businessData]);

  return (
    <>
      <div className="main_container">
        <div className="sub_mainContainer">
          <div className="slide-container">
            <Slide>
              {bannerData
                .slice(0, 6)
                .map(
                  ({
                    urlToImage,
                    title,
                    publishedAt,
                    description,
                    url,
                    source,
                  }) => (
                    <div>
                      <div
                        className="main_img"
                        style={{
                          ...divStyle,
                          backgroundImage: `url(${
                            urlToImage == null || urlToImage == undefined
                              ? no_image
                              : urlToImage
                          })`,
                        }}
                      >
                        <div className="slide_title">
                          <div className="time_category">
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="news_category badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2">
                                {source.name}
                              </div>
                              <div className="news_time">
                                {new Date(publishedAt).toDateString()}
                              </div>
                            </a>
                          </div>
                          <span className="headline_title">{title}</span>
                        </div>
                      </div>
                    </div>
                  )
                )}
            </Slide>
          </div>
        </div>
      </div>
    </>
  );
}
export default News_Banner;

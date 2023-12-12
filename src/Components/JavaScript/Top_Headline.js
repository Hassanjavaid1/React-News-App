import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide } from "react-slideshow-image";
import "../CSS/Top_Headline.css";
import Skeleton from "react-loading-skeleton";
import Top_Headline_Skeleton from "./Top_Headline_Skeleton";

function Top_Headline({ businessData, headlineData, isLoading }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="breaking_news">
        <div className="sub_breaking_news">
          {isLoading ? (
            <Skeleton height={"2rem"} baseColor="#b3b3b3" />
          ) : (
            <>
              <h3 className="breaking_title badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2">
                Breaking News
              </h3>

              <Slide>
                {businessData.map(({ title }) => (
                  <p id="top_breaking_news">{title}</p>
                ))}
              </Slide>
            </>
          )}
        </div>
      </div>
      <div className="top_headline">
        <div className="Top_sub_headline">
          <h1>Business News</h1>
        </div>
      </div>
      <div className="top_headline_position">
        <Slider {...settings}>
          {headlineData.map(
            ({ urlToImage, title, publishedAt, description, url, source }) => (
              <>
                {isLoading ? (
                  <Top_Headline_Skeleton />
                ) : (
                  <div className="sub_top_headline_position">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <div
                        className="top_headline_img"
                        style={{ backgroundImage: `url(${urlToImage})` }}
                      >
                        <div className="top_headline_title">
                          <div className="top_headline_category">
                            <div className="top_news_category badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2">
                              {source.name}
                            </div>
                            <div className="top_news_time">
                              {new Date(publishedAt).toDateString()}
                            </div>
                          </div>
                          <span className="sub_top_headline_title">
                            {title.slice(0, 90)}
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                )}
              </>
            )
          )}
        </Slider>
      </div>
    </>
  );
}

export default Top_Headline;

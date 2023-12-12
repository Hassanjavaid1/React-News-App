import React from "react";
import "../CSS/Tech_news.css";
import Signup from "./Signup";
import no_image from "../Images/no-image.png";
import Wide_Body_Skeleton from "../JavaScript/Wide_Body_Skeleton";

function Tech_news({ techData, isLoading }) {
  return (
    <>
      <div className="tech_container">
        <div className="Top_sub_headline">
          <h1>Tech News</h1>
        </div>
        <div className="tech">
          {techData
            .slice(0, 30)
            .map(
              ({
                urlToImage,
                title,
                publishedAt,
                description,
                url,
                source,
              }) => (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <div className="tech_box">
                    {isLoading ? (
                      <Wide_Body_Skeleton />
                    ) : (
                      <>
                        <img
                          src={
                            urlToImage == null || urlToImage == undefined
                              ? no_image
                              : urlToImage
                          }
                          className="tech_image"
                          alt=""
                        />
                        <div className="sub_tech_news">
                          <div className="tech_time_category">
                            <div className="tech_category badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2">
                              {source.name}
                            </div>
                            <div className="tech_time">
                              {new Date(publishedAt).toDateString()}
                            </div>
                          </div>
                          <div className="tech_title">{title.slice(0, 45)}</div>
                        </div>
                      </>
                    )}
                  </div>
                </a>
              )
            )}
        </div>
      </div>
    </>
  );
}

export default Tech_news;

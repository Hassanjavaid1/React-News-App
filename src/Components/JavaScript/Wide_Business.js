import React from "react";
import "../CSS/Business_News.css";
import ScrollToTop from "react-scroll-to-top";
import Skeleton from "react-loading-skeleton";
import Wide_Body_Skeleton from "./Wide_Body_Skeleton";
function Wide_Business({ businessData, isLoading }) {
  return (
    <>
      <div className="sub_main_wide_business">
        {businessData
          .slice(24, 99)
          .map(
            ({ urlToImage, title, publishedAt, description, url, source }) => (
              <>
                <div className="sub_wide_business">
                  <div className="sub_wide_position">
                    {isLoading ? (
                      <Wide_Body_Skeleton />
                    ) : (
                      <>
                        <img
                          src={urlToImage}
                          className="sub_wide_business_image"
                          alt=""
                        />
                        <div className="wide_sub_business_news">
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="business_time_category">
                              <div className="sub_wide_business_category badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2">
                                {source.name.slice(0, 18)}
                              </div>
                              <div className="sub_wide_business_time">
                                {new Date(publishedAt).toDateString()}
                              </div>
                            </div>
                            <div className="sub_business_title">
                              {title.slice(0, 53) + "..."}
                            </div>
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </>
            )
          )}
      </div>
    </>
  );
}

export default Wide_Business;

import React from "react";
import ScrollToTop from "react-scroll-to-top";
import Skeleton from "react-loading-skeleton";

import { RiFacebookFill } from "react-icons/ri";
import { LuGithub } from "react-icons/lu";
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";
import { SiFreelancer } from "react-icons/si";

import "../CSS/Business_News.css";

import no_image from "../Images/no-image.png";
import Tech_news from "./Tech_news";
import Signup from "./Signup";
import Wide_Business from "./Wide_Business";
import General_News_Skeleton from "./General_News_Skeleton";

function Business_News({ businessData, techData, isLoading }) {
  return (
    <>
      <div className="business">
        <div className="business_news">
          <div className="Top_sub_headline">
            <h1>general news</h1>
          </div>
          <div className="business_news_box">
            <div className="business_news_position">
              {businessData
                .slice(6, 20)
                .map(
                  ({
                    urlToImage,
                    title,
                    publishedAt,
                    description,
                    url,
                    source,
                  }) => (
                    <>
                      {isLoading ? (
                        <General_News_Skeleton />
                      ) : (
                        <div className="business_box">
                          <>
                            <img
                              src={
                                urlToImage == null || urlToImage == undefined
                                  ? no_image
                                  : urlToImage || <Skeleton />
                              }
                              className="business_image"
                              alt=""
                            />
                            <div className="sub_business_news">
                              <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <div className="business_time_category">
                                  <div className="business_category badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2">
                                    {source.name}
                                  </div>
                                  <div className="business_time">
                                    {new Date(publishedAt).toDateString()}
                                  </div>
                                </div>
                                <div className="business_title">
                                  {title.slice(56)}
                                </div>
                              </a>
                              <div className="business_description">
                                {description.slice(0, 280)}
                              </div>
                            </div>
                          </>
                        </div>
                      )}
                    </>
                  )
                )}
            </div>
            {/* SOCIAL HANDLES */}
            <div className="main_social_media">
              <div className="social_media">
                <h1 className="follow_us">Follow Me</h1>
                <div className="social_media_icons">
                  <a
                    href="https://web.facebook.com/profile.php?id=61551678367934"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="facebook"
                  >
                    <RiFacebookFill className="facebook_icon" />
                    <p className="follow_text">Connect on Facebook</p>
                  </a>
                  <a
                    href="https://github.com/Hassanjavaid1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github"
                  >
                    <LuGithub className="github_icon" />
                    <p className="follow_text">Follow me on Github</p>
                  </a>

                  <a
                    href="https://www.fiverr.com/hassanjavaid121?up_rollout=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fiverr"
                  >
                    <TbBrandFiverr className="fiverr_icon" />
                    <p className="follow_text">Find me on Fiverr</p>
                  </a>

                  <a
                    href="https://www.upwork.com/freelancers/~01c469c95425efc4ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="upwork"
                  >
                    <SiUpwork className="upwork_icon" />
                    <p className="follow_text">Find me on Upwork</p>
                  </a>
                  <a
                    href="https://www.freelancer.com/u/Hassanjavaid121"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="freelancer"
                  >
                    <SiFreelancer className="freelancer_icon" />
                    <p className="follow_text">Find me on Freelancer</p>
                  </a>
                </div>
                <Tech_news techData={techData} isLoading={isLoading} />
                <Signup />
              </div>
            </div>
            {/* //////////////////////
            WIDE BUSINESS BOX
            ////////////////////// */}
            <div className="main_wide_box">
              {businessData
                .slice(22, 24)
                .map(
                  ({
                    urlToImage,
                    title,
                    publishedAt,
                    description,
                    url,
                    source,
                  }) => (
                    <>
                      {isLoading ? (
                        <General_News_Skeleton />
                      ) : (
                        <div className="wide_business_box">
                          <img
                            src={urlToImage}
                            className="wide_business_image"
                            alt=""
                          />
                          <div className="wide_sub_business_news">
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="business_time_category">
                                <div className="business_category badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2">
                                  business
                                </div>
                                <div className="business_time">
                                  {new Date(publishedAt).toDateString()}
                                </div>
                              </div>
                              <div className="business_title">
                                {title.slice(0, 70) + "..."}
                              </div>
                            </a>
                            <div className="business_description">
                              {description.slice(0, 180) + "..."}
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )
                )}
            </div>
          </div>
          <Wide_Business businessData={businessData} isLoading={isLoading} />
        </div>
      </div>
    </>
  );
}

export default Business_News;

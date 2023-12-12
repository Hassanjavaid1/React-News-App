import React, { useState } from "react";
import "../CSS/Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import { CgWebsite } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";
import { SiFreelancer } from "react-icons/si";
import Main_footer from "./Main_footer";


function Navbar({setsearchTag,searchTag,setsearchData}) {
  const date = new Date();
  const str = date.toDateString();
  const [time, settime] = useState(`${str}`);
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <div className="nav_container">
        <div className="navbar">
     
            <div id="heading">
              <span className="big">BIG</span>
              <span className="bignews">NEWS</span>
            </div>
        
          <div className="nav_search">
          </div>
          <div className="authentication">
            <div className="today_date">{time}</div>
            <div className="nav_social_icon">
              <a
                href="https://hassanjavaid1.github.io/MyPortfolioWebsite"
                className="sub_nav_social_icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <CgWebsite className="react_nav_icon" />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61551678367934"
                className="sub_nav_social_icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaFacebook className="react_nav_icon" />
              </a>
              <a
                href="https://github.com/Hassanjavaid1"
                className="sub_nav_social_icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoGithub className="react_nav_icon" />
              </a>
              <a
                href="https://www.fiverr.com/hassanjavaid121?up_rollout=true"
                className="sub_nav_social_icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <TbBrandFiverr className="react_nav_icon" />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01c469c95425efc4ca"
                className="sub_nav_social_icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <SiUpwork className="react_nav_icon" />
              </a>
              <a
                href="https://www.freelancer.com/u/Hassanjavaid121"
                className="sub_nav_social_icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <SiFreelancer className="react_nav_icon" />
              </a>
            </div>
          </div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            isAuthenticated && (
              <div className="main_welcome">
                <img src={user.picture} alt={user.name} id="google_pic" />
                <div className="welcome">
                  Welcome Back!
                  <h6>{user.name}</h6>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;

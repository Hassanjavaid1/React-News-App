import { useEffect, useState } from "react";
import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "./Components/JavaScript/Navbar";
import Footer from "./Components/JavaScript/Footer";

import React, { Suspense } from "react";
const Top_Headline = React.lazy(() =>
  import(`./Components/JavaScript/Top_Headline`)
);

const Business_News = React.lazy(() =>
  import(`./Components/JavaScript/Business_News`)
);
const News_Banner = React.lazy(() =>
  import(`./Components/JavaScript/News_Banner`)
);

function App() {
  const ApiUrl = "5c5d00e5c5ac482cbe4ddc59aef9ef68";
  const [businessData, setbusinessData] = useState([]);
  const [headlineData, setHeadlineData] = useState([]);
  const [techData, setTechData] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const fetchData = async function () {
    try {
      //General
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=general&apiKey=${ApiUrl}`
      );
      const data = await response.json();
      setbusinessData(data.articles);

      //Fetching data for
      const headline_response = await fetch(
        `https://newsapi.org/v2/everything?q=business&apiKey=${ApiUrl}`
      );
      const headline_data = await headline_response.json();
      setHeadlineData(headline_data.articles);

      //Fetching Technology News

      const tech_response = await fetch(
        `https://newsapi.org/v2/everything?q=technology&sortBy=popularity&apiKey=5c5d00e5c5ac482cbe4ddc59aef9ef68`
      );
      const tech_data = await tech_response.json();
      setTechData(tech_data.articles);
      setisLoading(false);
    } catch (error) {
      console.error("Error While fetching data:", error);
      setisLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {}, [businessData]);
  return (
    <basename="/react-news-app">
      <Navbar />
      <Suspense fallback={<div className="loader"></div>}>
        <>
          <News_Banner businessData={businessData} />
          <Top_Headline
            businessData={businessData}
            headlineData={headlineData}
            isLoading={isLoading}
          />
          <Business_News
            style={{ marginTop: "140vh" }}
            businessData={businessData}
            techData={techData}
            isLoading={isLoading}
          />
        </>
      </Suspense>
      <Footer />
      <ScrollToTop smooth />
    </>
  );
}

export default App;

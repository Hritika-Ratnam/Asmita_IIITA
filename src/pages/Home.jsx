import React from "react";
import ImageSlider from "../component/ImageSlider";
import AnnouncementsAndEvents from "../component/AnnouncementsAndEvents";
import  img1 from "../assets/img1.jpg";
import  img2 from "../assets/img2.jpg";
import  img3 from "../assets/img3.jpg";
import  img4 from "../assets/img4.jpg";

export const Home = () => {
  const slides = [
    { 
      url: img1,
      title: "Cricket Ball",
      description: "Cricekt news",
    },
    {
      url: img2,
      title: "IPL Pics",
      description:
        "The Indian Premier League is a professional Twenty20 cricket league in India organised by the Board of Control for Cricket in India",
    },
    {
      url: img3,
      title: "WPL Pics",
      description:
        "WPL 2025: Young all-rounder Kashvee Gautam met India men's all-rounder Hardik Pandya after the Gujarat Giants lost to Mumbai Indians in the Eliminator",
    },
    {
      url: img4,
      title: "WPL Pics",
      description:
        "WPL 2025: Young all-rounder Kashvee Gautam met India men's all-rounder Hardik Pandya after the Gujarat Giants lost to Mumbai Indians in the Eliminator",
    },
  ];
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col gap-5">
        <ImageSlider slides={slides} />
        <AnnouncementsAndEvents />
      </div>
    </div>
  );
};

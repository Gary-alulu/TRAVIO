"use client";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ClientSliderProps {
  children: React.ReactNode;
  settings: Settings;
}

const ClientSlider = ({ children, settings }: ClientSliderProps) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default ClientSlider;
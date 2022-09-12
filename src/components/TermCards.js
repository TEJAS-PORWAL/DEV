import React from "react";
import "./TermCards.css";
import { Link, Outlet } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export default function TermCards() {
    const options = {
        margin: 5,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
            nav: false,
          },
          600: {
            items: 2,
            nav: false,
          },
          1000: {
            items: 3,
            nav: false,
          },
          1070: {
            items: 4,
            nav: false,
          },
        },
    };
  return (
    <div className="cards--cont">
    {/* <OwlCarousel> */}
      <Link  className="termcards" to={"/cardsection"}>
        <div >Long Term</div>
      </Link>
      <Link className="termcards" to={"/cardsection"}>
        <div >Mid Term</div>
      </Link>
      <Link className="termcards" to={"/cardsection"}>
        <div >Short Term</div>
      </Link>
      <Link  className="termcards" to={"/cardsection"}>
        <div>Livestock</div>
      </Link>
    {/* </OwlCarousel> */}
    </div>
  );
}

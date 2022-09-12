import React, { useState } from "react";
import dating from "./Cards_data.json";
import ErrorBoundary from "./ErrorBoundary";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Cards.css";
import { Link, Outlet } from "react-router-dom";
import { MContext } from "./MyProvider";

export default function Cards(props) {
  const [iteming, setitem] = useState(dating);
  const card = iteming.map((render) => 
  {
    if(render.id===1||render.id===7||render.id===13||render.id===19){
      return('');
    }
    else return(
    <MContext.Consumer  key={render.id}>
      {(context) => (
        <Link to={"Cardsection"}>
          <div
            id={String(render.id)}
            className="card-div"
            style={{ backgroundImage:`url(${render.card_img})`}}
            onClick={() => {
              setTimeout(() => {
                window.scrollTo(0,render.id*context.state.message-context.state.message);
              }, 1);
            }}
          >
            <h2>{render.card_title}</h2>
          </div>
        </Link>
      )}
    </MContext.Consumer>
  )});

  const options = {
    margin: 20,
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
    <ErrorBoundary>
      <OwlCarousel className="card-container" {...options}>
        {card}
      </OwlCarousel>
      <Outlet />
    </ErrorBoundary>
  );
}

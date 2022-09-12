import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./Cardsection.css";
import data from "./Cards_data.json";
import { MContext } from "./MyProvider";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Cardsection(props) {
  const [item, setitem] = useState(data);
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
  const card_data = item.map((render)=>{
    if(render.id===1||render.id===7||render.id===13||render.id===19){
      return(
        <div className="section-cards" key={render.id} id={String(render.id)}>
        <h2>{render.card_title}</h2>
        <div className="section_contenting">{render.card_info}</div>
        <OwlCarousel className="card-contain" {...options}>
        {render.card_img.map((lists) => (
          <>
             <div
             key={Math.random()}
             className="cards-diving"
             style={{ backgroundImage: `url(${lists.img})` }}
           >
            <h2>{lists.title}</h2>
           </div>
          </>
          ))}
         </OwlCarousel>
      </div>
      );
    }
    else{
      return (
        <div className="section-cards" key={render.id} id={String(render.id)}>
        <h2>{render.card_title}</h2>
        <div
          className="cards-div"
          style={{ backgroundImage: `url(${render.card_img})` }}
        ></div>
        <div className="section_content">{render.card_info}</div>
      </div>
      );
    }
  });
  return (
    <MContext.Consumer>
      {(context) => (
        <div
          id="hii"
          className="cardsection"
          {
            ...setTimeout(
              ()=> {
                let s = document.getElementById("hii");
                context.setMessage(s.clientHeight/10);
              }
              ,1)
          }
        >
          {card_data}
        </div>
      )}
    </MContext.Consumer>
  );
}

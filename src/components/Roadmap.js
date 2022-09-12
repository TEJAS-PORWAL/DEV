import React from "react";
import "./Roadmap.css";
import ErrorBoundary from "./ErrorBoundary";

export default function Roadmap() {
  setTimeout(() => {
    let left_btn = document.getElementById("left-btn");
    let right_btn = document.getElementById("right-btn");
    let wrap = document.getElementById("wrap");
    left_btn.onclick = () => {
      wrap.scrollLeft -= wrap.clientWidth;
    };
    right_btn.onclick = () => {
      wrap.scrollLeft += wrap.clientWidth;
    };
    let div_1 = document.getElementById("2022");
    div_1.onmouseenter = () => {
      document.getElementById("anch-1").style.color = "white";
    };
    div_1.onmouseleave = () => {
      let i = document.getElementById("anch-1");
      let y = document.getElementById("anch-2");
      let z = document.getElementById("anch-3");
      i.onmouseenter = () => {
        i.style.color = "white";
      };
      i.onmouseout = () => {
        i.style.color = "rgb(99, 165, 0)";
      };
      i.style.color = "rgb(99, 165, 0)";
      left_btn.onmouseenter = () => {
        i.style.color = "white";
      };
      right_btn.onmouseenter = () => {
        i.style.color = "white";
      };
      right_btn.onclick = () => {
        wrap.scrollLeft += wrap.clientWidth;
        i.style.color = "rgb(99, 165, 0)";
        y.style.color = "white";
        right_btn.onclick = () => {
          wrap.scrollLeft += wrap.clientWidth;
          y.style.color = "rgb(99, 165, 0)";
          z.style.color = "white";
        };
      };
    };
    let div_2 = document.getElementById("2023");
    div_2.onmouseenter = () => {
      document.getElementById("anch-2").style.color = "white";
    };
    div_2.onmouseleave = () => {
      let i = document.getElementById("anch-2");
      let y = document.getElementById("anch-1");
      let z = document.getElementById("anch-3");
      i.onmouseenter = () => {
        i.style.color = "white";
      };
      i.onmouseout = () => {
        i.style.color = "rgb(99, 165, 0)";
      };
      i.style.color = "rgb(99, 165, 0)";
      left_btn.onmouseenter = () => {
        i.style.color = "white";
      };
      right_btn.onmouseenter = () => {
        i.style.color = "white";
      };
      left_btn.onclick = () => {
        wrap.scrollLeft -= wrap.clientWidth;
        i.style.color = "rgb(99, 165, 0)";
        y.style.color = "white";
      };
      right_btn.onclick = () => {
        wrap.scrollLeft += wrap.clientWidth;
        i.style.color = "rgb(99, 165, 0)";
        z.style.color = "white";
      };
    };
    let div_3 = document.getElementById("2024");
    div_3.onmouseenter = () => {
      document.getElementById("anch-3").style.color = "white";
    };
    div_3.onmouseleave = () => {
      let i = document.getElementById("anch-3");
      let y = document.getElementById("anch-2");
      let z = document.getElementById("anch-1");
      i.onmouseenter = () => {
        i.style.color = "white";
      };
      i.onmouseout = () => {
        i.style.color = "rgb(99, 165, 0)";
      };
      i.style.color = "rgb(99, 165, 0)";
      left_btn.onmouseenter = () => {
        i.style.color = "white";
      };
      right_btn.onmouseenter = () => {
        i.style.color = "white";
      };
      left_btn.onclick = () => {
        wrap.scrollLeft -= wrap.clientWidth;
        i.style.color = "rgb(99, 165, 0)";
        y.style.color = "white";
        left_btn.onclick = () => {
          wrap.scrollLeft -= wrap.clientWidth;
          y.style.color = "rgb(99, 165, 0)";
          z.style.color = "white";
        };
      };
    };
  }, 10);
  
  const scrolly = ()=>{ 
    setTimeout(()=>{
      window.scrollTo(0,1720);
    },1000)
  }
  return (
    <ErrorBoundary>
      <div id ="roadmap" className="roadmap">
        <h3>WE HAVE BIG PLANS FOR THE FUTURE OF REQUEST</h3>
        <h1>Roadmap</h1>
        <div className="roadmap-nav">
          <a id="anch-1" href="#2022" 
          onClick={scrolly}
          >
            2022
          </a>
          <a id="anch-2" href="#2023" 
          onClick={scrolly}
          >
            2023
          </a>
          <a id="anch-3" href="#2024" 
          onClick={scrolly}
          >
            2024
          </a>
        </div>
        <div className="btn-div">
        <div className="wrapper" id="wrap">
          <div id="2022" className="wrap-item">
            <div className="div-box">
              <div className="card-box">
                <span style={{ opacity: 1 }}></span>
                <div>
                  <h2>Q1</h2>
                  <ul>
                    <li>
                    Planning and Building a professional team 
                    </li>
                    <li>Identity of core problems</li>
                    <li>industry research </li>
                  </ul>
                </div>
              </div>
              <div className="card-box">
                <span></span>
                <div>
                  <h2>Q2</h2>
                  <ul>
                    <li>Market research </li>
                    <li>Product finalization</li>
                    <li>Development planning</li>
                    <li>Budget and financial planning</li>
                  </ul>
                </div>
              </div>
              <div className="card-box">
                <span></span>
                <div>
                  <h2>Q3</h2>
                  <ul>
                    <li>Process Planning and case Study of Phase1 crops  </li>
                    <li>Planning of land and soil tests of respected farms for phase1 crops</li>
                    <li>Blockchain process and planning </li>
                    <li>Whitepaper and Applications Planning </li>
                    <li>Metaverse Planning</li>
                    <li>Partnerships Planning</li>
                    <li>Marketing Planning</li>
                  </ul>
                </div>
              </div>
              <div className="card-box">
                <span></span>
                <div>
                  <h2>Q4</h2>
                  <ul>
                    <li>WhitePaper Release</li>
                    <li>Website Launch</li>
                    <li>Contract Creation</li>
                    <li>Listing on CMC and Goingecko</li>
                    <li>Partnership with some good launchpads</li>
                    <li>Conducting Presale and IDO</li>
                    <li>Purshasing land in land</li>
                    <li>The Agriverse Web app release</li>
                    <li>The Agriverse android app beta release</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="2023" className="wrap-item">
            <div className="div-box">
              <div className="card-box">
                <span></span>
                <div>
                  <h2>Q1</h2>
                  <ul>
                    <li>
                    Introducing 7-10 long-term, mid term and short term crops</li>
                    <li>Intensive expansion and leasing with farmers </li>
                    <li>NFT marketplace launch</li>
                    <li>Release of second batch of  NF's</li>
                    <li>The Agriverse iOS app beta release</li>
                    <li>Complete app Launch (android and iOS)</li>
                    <li>Multi Chain Token integration</li>
                  </ul>
                </div>
              </div>
              <div className="card-box">
                <span></span>
                <div>
                  <h2>Q2</h2>
                  <ul>
                    <li> Introducing more crops in TheAgriverse ecosystem.</li>
                    <li>create brand name in India</li>
                    <li>Executing exporting Marketing plan</li>
                    <li>Introducing livestock's in TheAgriverse ecosystem</li>
                    <li>Partnership with some well known institutions/organizations.</li>
                  </ul>
                </div>
              </div>
              <div className="card-box">
                <span></span>
                <div>
                  <h2>Q3</h2>
                  <ul>
                    <li> Creating Brand and expanding all over the brand Name of Agriverse</li>
                    <li>Starting a mass #GoGreen initiative</li>
                    <li>Starting a mass #GoGreen initiative</li>
                    <li>Executing Marketing plan II</li>
                  </ul>
                </div>
              </div>
              <div className="card-box">
                <span></span>
                <div>
                  <h2>Q4</h2>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="2024" className="wrap-item">
            <div className="div-box">
              <div className="card-box">
                <span></span>
                <div>
                  <h2>Q1</h2>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className="card-box">
                <span></span>
                <div>
                  <h2>Q2</h2>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className="card-box">
                <span></span>
                <div>
                  <h2>Q3</h2>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className="card-box">
                <span></span>
                <div>
                  <h2>Q4</h2>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p id="scale"></p>
        <button id="left-btn" className="scroll-btn">
          &lt;
        </button>
        <button id="right-btn" className="scroll-btn">
          &gt;
        </button>
        </div>
      </div>
    </ErrorBoundary>
  );
}

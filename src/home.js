import React from "react";
import log from "./log.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Slide_1 from "./Slide_1.png";
import Consumer from "./Consumer.png";
import NavV from "./Nav";
import slide from "./slide.png";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: true,
      image: [Slide_1, slide],
      dispaly: Slide_1,
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
  componentDidMount() {
    let image = this.state.image;
    let mov = 0;
    setInterval(() => {
      mov += 1;
      if (mov < 3) {
this.setState({dispaly:image[(mov-1)]})
      }else{
        mov=0
      }
    }, 3000);
  }

  render() {
    return (
      <div>
        {this.state.showPopup
          ? ((document.body.style.overflow = `hidden`),
            (<NavV closePopup={this.togglePopup.bind(this)} />))
          : ((document.body.style.overflow = `scroll`), null)}

        <div className="top-nav  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-1  p-2">
          <div className="flex   log  ">
            <img alt=" bnr log" src={log} />
          </div>
          <div className="flex  flex-col space-y-3 national p-2 ">
            <p className="nationalt font-bold">NATIONAL BANK OF RWANDA</p>
            <p>
              <span className="text-2xl font-bold">"GERERANYA"</span>
              <span className="text-xl">
                {" "}
                is a website that allows consumers of financial services to
                compare costs of different services from financial service
                providers
              </span>
            </p>
          </div>
          <div className=" butt grid grid-row-1 lg:grid-row-2 md:grid-row-2  ">
            <div className="languag uppercase flex flex-row  space-x-2">
              <button>english</button>
              <button>Kinyarwanda</button>
            </div>
            <div className="languag uppercase flex flex-row PX-2 space-x-6">
            <div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 19.938A8.001 8.001 0 0 0 12 4a8 8 0 0 0-1 15.938V14H9v-2h2v-1.654c0-1.337.14-1.822.4-2.311A2.726 2.726 0 0 1 12.536 6.9c.382-.205.857-.328 1.687-.381.329-.021.755.005 1.278.08v1.9H15c-.917 0-1.296.043-1.522.164a.727.727 0 0 0-.314.314c-.12.226-.164.45-.164 1.368V12h2.5l-.5 2h-2v5.938zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"></path></g></svg></div>
            <div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></div>
            <div><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22.8 8.6c-.2-1.5-.4-2.6-1-3-.6-.5-5.8-.6-9.8-.6s-9.2.1-9.8.6c-.6.4-.8 1.5-1 3s-.2 2.4-.2 3.4 0 1.9.2 3.4.4 2.6 1 3c.6.5 5.8.6 9.8.6 4 0 9.2-.1 9.8-.6.6-.4.8-1.5 1-3s.2-2.4.2-3.4 0-1.9-.2-3.4zm-12.8 7v-7.2l6 3.6-6 3.6z"></path></svg></div>
            <div><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM4.5 10.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM11.5 10.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5z"></path></svg></div>
            <div></div>
            </div>
          </div>
        </div>
        <div className="main flex flex-col">
          <Navbar className="Navbar">
            <Container>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{
                    maxHeight: "100px",
                  }}
                  navbarScroll
                >
                  <Nav.Link className="nav">HOME</Nav.Link>
                  <Nav.Link className="nav">BANKS</Nav.Link>
                  <Nav.Link className="nav">FEEDBACK</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div>
            <div className="mslide">
              <img alt="slideimage" src={this.state.dispaly} />
            </div>
          </div>
          <div className="flex justify-center p-4">
            <div className="slide"></div>
            <div className="slide"></div>
          </div>
          {/* banking */}
          <div className=" bg-white mt-4">
            <div className="banking flex justify-center">
              <button className="bank text-gray-400 "> Banking</button>
            </div>

            <hr />
            <div className=" grid grid-cols-1 lg:grid-cols-4 gap-1 ">
              {/* nav */}
              <div className="service flex flex-col p-6 shadow-md dark:bg-gray-800">
                <div className="bank text-gray-400 ">Main Service</div>
                <div>
                  <button>Loans</button>
                </div>
                <div>
                  <button>Accounts</button>
                </div>
                <hr />
                <div className=" text-gray-400 ">Other Service</div>
                <div>
                  <button>Cards</button>
                </div>
                <div>
                  <button>Banking</button>
                </div>
              </div>
              {/* cards */}
              <div>
                {/* cd */}
                <div className="cad p-3 flex flex-col shadow-md justify-center dark:bg-gray-800">
                  <div className="cadi  flex justify-center">
                    <img alt="cardimage" src={Consumer} />
                  </div>
                  <div className="cadt font-bold  flex justify-center ">
                    Consumer Loans
                  </div>
                  <div className="cadd  flex justify-center ">
                    Consumer loans are loans where a person borrows money from a
                    lender for personal reasons. Normally these loans are not
                    subject to a particular project
                  </div>
                  <div className="cadb  flex justify-center ">
                    <button>Compare</button>
                  </div>
                </div>
                {/* cd */}
                <div className="cad p-3 flex flex-col shadow-md justify-center dark:bg-gray-800">
                  <div className="cadi  flex justify-center">
                    <img alt="cardimage" src={Consumer} />
                  </div>
                  <div className="cadt font-bold  flex justify-center ">
                    Consumer Loans
                  </div>
                  <div className="cadd  flex justify-center ">
                    Consumer loans are loans where a person borrows money from a
                    lender for personal reasons. Normally these loans are not
                    subject to a particular project
                  </div>
                  <div className="cadb  flex justify-center ">
                    <button>Compare</button>
                  </div>
                </div>
              </div>
              <div>
                {/* cd */}
                <div className="cad p-3 flex flex-col shadow-md justify-center dark:bg-gray-800">
                  <div className="cadi  flex justify-center">
                    <img alt="cardimage" src={Consumer} />
                  </div>
                  <div className="cadt font-bold  flex justify-center ">
                    Consumer Loans
                  </div>
                  <div className="cadd  flex justify-center ">
                    Consumer loans are loans where a person borrows money from a
                    lender for personal reasons. Normally these loans are not
                    subject to a particular project
                  </div>
                  <div className="cadb  flex justify-center ">
                    <button>Compare</button>
                  </div>
                </div>
                {/* cd */}
                <div className="cad p-3 flex flex-col shadow-md justify-center dark:bg-gray-800">
                  <div className="cadi  flex justify-center">
                    <img alt="cardimage" src={Consumer} />
                  </div>
                  <div className="cadt font-bold  flex justify-center ">
                    Consumer Loans
                  </div>
                  <div className="cadd  flex justify-center ">
                    Consumer loans are loans where a person borrows money from a
                    lender for personal reasons. Normally these loans are not
                    subject to a particular project
                  </div>
                  <div className="cadb  flex justify-center ">
                    <button>Compare</button>
                  </div>
                </div>
              </div>
              <div>
                {/* cd */}
                <div className="cad p-3 flex flex-col shadow-md justify-center dark:bg-gray-800">
                  <div className="cadi  flex justify-center">
                    <img alt="cardimage" src={Consumer} />
                  </div>
                  <div className="cadt font-bold  flex justify-center ">
                    Consumer Loans
                  </div>
                  <div className="cadd  flex justify-center ">
                    Consumer loans are loans where a person borrows money from a
                    lender for personal reasons. Normally these loans are not
                    subject to a particular project
                  </div>
                  <div className="cadb  flex justify-center ">
                    <button>Compare</button>
                  </div>
                </div>
                {/* cd */}
                <div className="cad p-3 flex flex-col shadow-md justify-center dark:bg-gray-800">
                  <div className="cadi  flex justify-center">
                    <img alt="cardimage" src={Consumer} />
                  </div>
                  <div className="cadt font-bold  flex justify-center ">
                    Consumer Loans
                  </div>
                  <div className="cadd  flex justify-center ">
                    Consumer loans are loans where a person borrows money from a
                    lender for personal reasons. Normally these loans are not
                    subject to a particular project
                  </div>
                  <div className="cadb  flex justify-center ">
                    <button>Compare</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-4 bg-white mt-4">
            <div>
              <iframe
                _ngcontent-jcx-c9=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
                frameborder="0"
                height="200"
                title="YouTube video player"
                width="100%"
                src="https://www.youtube.com/embed/W7ezf-1SATM"
              ></iframe>
            </div>
            <div>
              <iframe
                _ngcontent-jcx-c9=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
                frameborder="0"
                height="200"
                title="YouTube video player"
                width="100%"
                src="https://www.youtube.com/embed/W7ezf-1SATM"
              ></iframe>
            </div>
            <div>
              <iframe
                _ngcontent-jcx-c9=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
                frameborder="0"
                height="200"
                title="YouTube video player"
                width="100%"
                src="https://www.youtube.com/embed/W7ezf-1SATM"
              ></iframe>
            </div>
          </div>

          {/* footer */}
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

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
    let len = image.length;
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
          <div className="flex flex-col space-y-3 national p-2 ">
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
          <div className=" butt">
            <div className="languag uppercase flex flex-row PX-2 space-x-2">
              <button>english</button>
              <div className="sep"></div>
              <button>Kinyarwanda</button>
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

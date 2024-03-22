import React from "react";
import CardComponent from "./CardComponent";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import Youtube from "../images/icon-youtube.svg";
import Instagram from "../images/icon-instagram.svg";
import DownArrow from "../images/icon-down.svg";
import UpArrow from "../images/icon-up.svg";
import "./StylingHomeComponent.css";
import { useState } from "react";
import LittleCardComponent from "./LittleCardComponent";
import { Col, Row, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const HomeComponent = () => {
  const [darkModeSwitch, setDarkModeSwitch] = useState(true);
  const [bg, setBg] = useState<string>("");
  const [cardColor, setCardColor] = useState<string>("");
  const [textColor, setTextColor] = useState<string>("");

  // const darMode = () => {
  //   let element = document.body;
  //   element.dataset.bsTheme =
  //     element.dataset.bsTheme == "light" ? "dark" : "light";
  // }

  const darkMode = () => {
    setDarkModeSwitch(!darkModeSwitch);
  };
  // const boop = () => {
  //   if (bg === "bg-light") {
  //     setBg('')
  //     setCardColor('')
  //     textColor('')
  //   } else (){
  //     setBg('');
  //     setCardColor('');
  //     textColor('');

  //   }
  // };

  return (
    <div className={`${darkModeSwitch ? "" : "Background"}`}>
      <Container>
        <div className="pt-4">
          <Row>
            <Col className="">
              <div className="">
                <h1 className={` ${darkModeSwitch ? "hTwo" : "hOne"}`}>
                  Social Media Dashboard
                </h1>
                <p className={`${darkModeSwitch ? "pTwo" : "pOne"}`}>
                  Total Followers 23,004
                </p>
              </div>
            </Col>
            <Col className="">
              <div className={`d-flex justify-content-end`}>
                <p className={`pe-3 ${darkModeSwitch ? "pTwo" : "pOne"}`}>
                  Dark Mode
                </p>
                <Form>
                  <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    className={`${darkModeSwitch ? "" : "switchBackground"}`}
                    onClick={darkMode}
                  />
                </Form>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="p-10">
              <CardComponent
                cardTopStrip="topStripFaceBook"
                cardBackground={`${
                  darkModeSwitch ? "cardsbackgroundTwo" : "cardsbackground"
                }`}
                socialMediaIcon={facebook}
                userName={`${
                  darkModeSwitch ? "pTwo" : "pOne"
                } @nathanf`}
                followerNumber={`${
                  darkModeSwitch ? 'hTwo' : 'hOne'
                } 1987`}
                changeClass={ darkModeSwitch ? 'hTwo' : 'hOne'}
                caption="F O L L O W E R S"
                arrowIcon={UpArrow}
                value={`${
                  darkModeSwitch ? "upArrowTxt" : "upArrowTxt"
                }12 Today`}
              />
            </Col>
            <Col className="p-10">
              <CardComponent
                cardBackground={`${
                  darkModeSwitch ? "cardsbackgroundTwo" : "cardsbackground"
                }`}
                cardTopStrip="topStripTwitter"
                socialMediaIcon={twitter}
                userName={`${
                  darkModeSwitch ? "pTwo" : "pOne"
                }@nathanf`}
                followerNumber={`${
                  darkModeSwitch ? "hTwo" : "hOne"
                }1044`}
                changeClass={ darkModeSwitch ? 'hTwo' : 'hOne'}
                caption="F O L L O W E R S"
                arrowIcon={UpArrow}
                value={`${
                  darkModeSwitch ? "upArrowTxt" : "upArrowTxt"
                }12 Today`}
              />
            </Col>
            <Col className="p-10">
              <CardComponent
                cardBackground={`${
                  darkModeSwitch ? "cardsbackgroundTwo" : "cardsbackground"
                }`}
                cardTopStrip="topStripInstagram"
                socialMediaIcon={Instagram}
                userName={`${
                  darkModeSwitch ? "pTwo" : "pOne"
                }Nathan F.`}
                followerNumber={`${
                  darkModeSwitch ? "hTwo" : "hOne"
                }8239`}
                changeClass={ darkModeSwitch ? 'hTwo' : 'hOne'}
                caption="S U B S C R I B E R S"
                arrowIcon={DownArrow}
                value={`${
                  darkModeSwitch ? "upArrowTxt" : "upArrowTxt"
                }12 Today`}
              />
            </Col>
            <Col className="p-10">
              <CardComponent
                cardBackground={`${
                  darkModeSwitch ? "cardsbackgroundTwo" : "cardsbackground"
                }`}
                cardTopStrip="topStripYoutube"
                socialMediaIcon={Youtube}
                userName={`${
                  darkModeSwitch ? "pTwo" : "pOne"
                }@realnathanf`}
                followerNumber={`${
                  darkModeSwitch ? "hTwo" : "hOne"
                }11k`}
                changeClass={ darkModeSwitch ? 'hTwo' : 'hOne'}
                caption="F O L L O W E R S"
                arrowIcon={UpArrow}
                value={`${
                  darkModeSwitch ? "upArrowTxt" : "upArrowTxt"
                }12 Today`}
              />
            </Col>
          </Row>
        </div>

        <div className="">
          <Row>
            <h1 className={`${darkModeSwitch ? "hTwo" : "hOne"} mt-5 mb-3`}>
              Overview - Today
            </h1>
          </Row>
          <Row>
            <Col>
              <LittleCardComponent
                cardBackground={`${
                  darkModeSwitch ? "cardsbackgroundTwo" : "cardsbackground"
                }`}
                description="Page Views"
                mediaIcon={facebook}
                numberCount="87"
                arrow={UpArrow}
                value="3%"
              />
            </Col>
            <Col>
              <LittleCardComponent
                cardBackground={`${
                  darkModeSwitch ? "cardsbackgroundTwo" : "cardsbackground"
                }`}
                description="Likes"
                mediaIcon={facebook}
                numberCount="52"
                arrow={UpArrow}
                value="2%"
              />
            </Col>
            <Col>
              <LittleCardComponent
                cardBackground={`${
                  darkModeSwitch ? "cardsbackgroundTwo" : "cardsbackground"
                }`}
                description="Likes"
                mediaIcon={Instagram}
                numberCount="5462"
                arrow={UpArrow}
                value="2257%"
              />
            </Col>
            <Col>
              <LittleCardComponent
                cardBackground={`${
                  darkModeSwitch ? "cardsbackgroundTwo" : "cardsbackground"
                }`}
                description="profile Views"
                mediaIcon={Instagram}
                numberCount="52k"
                arrow={UpArrow}
                value="1375%"
              />
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col>
              <LittleCardComponent
                cardBackground={`${
                  darkModeSwitch ? "cardsbackgroundTwo" : "cardsbackground"
                }`}
                description="Retweets"
                mediaIcon={twitter}
                numberCount="117"
                arrow={UpArrow}
                value="303%"
              />
            </Col>
            <Col>
              <LittleCardComponent
                cardBackground={`${
                  darkModeSwitch ? "cardsbackgroundTwo" : "cardsbackground"
                }`}
                description="Likes"
                mediaIcon={twitter}
                numberCount="507"
                arrow={UpArrow}
                value="553%"
              />
            </Col>
            <Col>
              <LittleCardComponent
                cardBackground={`${
                  darkModeSwitch ? "cardsbackgroundTwo" : "cardsbackground"
                }`}
                description="Likes"
                mediaIcon={Youtube}
                numberCount="107"
                arrow={UpArrow}
                value="19%"
              />
            </Col>
            <Col>
              <LittleCardComponent
                cardBackground={`${
                  darkModeSwitch ? "cardsbackgroundTwo" : "cardsbackground"
                }`}
                description="Total Views"
                mediaIcon={Youtube}
                numberCount="1407"
                arrow={UpArrow}
                value="12%"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default HomeComponent;

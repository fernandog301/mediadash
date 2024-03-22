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
      <div className={`${darkModeSwitch ? "" : "BackSquare"}`}>
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
            <Col className="p-10 col-sm-5 col-md-3">
              <CardComponent
                cardTopStrip="topStripFaceBook"
                cardBackground={`${
                  darkModeSwitch ? "cardsbackgroundTwo" : "cardsbackground"
                }`}
                userNameClass={`${
                  darkModeSwitch ? "pTwo" : "pOne"
                }`}
                valueClass={'upArrowTxt'}
                changeClass={ darkModeSwitch ? 'hTwo' : 'hOne'}

                socialMediaIcon={facebook}
                userName={`@nathanf`}
                followerNumber={` 1987`}
                
                caption="F O L L O W E R S"
                arrowIcon={UpArrow}
                value={`12 Today`}
              />
            </Col>
            <Col className="p-10 col-sm-5 col-md-3">
              <CardComponent
                cardBackground={`${
                  darkModeSwitch ? "cardsbackgroundTwo" : "cardsbackground"
                }`}
                cardTopStrip="topStripTwitter"
                socialMediaIcon={twitter}
                userNameClass={`${
                  darkModeSwitch ? "pTwo" : "pOne"
                }`}
                valueClass={'upArrowTxt'}
                changeClass={ darkModeSwitch ? 'hTwo' : 'hOne'}
                userName={`@nathanf`}
                followerNumber={`1044`}
                caption="F O L L O W E R S"
                arrowIcon={UpArrow}
                value={`12 Today`}
              />
            </Col>
            <Col className="p-10 col-sm-5 col-md-3">
              <CardComponent
                cardBackground={`${
                  darkModeSwitch ? "cardsbackgroundTwo" : "cardsbackground"
                }`}

                userNameClass={`${
                  darkModeSwitch ? "pTwo" : "pOne"
                }`}
                valueClass={'downArrowTxt'}
                changeClass={ darkModeSwitch ? 'hTwo' : 'hOne'}
                cardTopStrip="topStripInstagram"
                socialMediaIcon={Instagram}
                userName={`Nathan F.`}
                followerNumber={`8239`}
                caption="S U B S C R I B E R S"
                arrowIcon={DownArrow}
                value={`12 Today`}
              />
            </Col>
            <Col className="p-10 col-md-3">
              <CardComponent
                cardBackground={`${
                  darkModeSwitch ? "cardsbackgroundTwo" : "cardsbackground"
                }`}
                cardTopStrip="topStripYoutube"
                userNameClass={`${
                  darkModeSwitch ? "pTwo" : "pOne"
                }`}
                valueClass={'upArrowTxt'}
                changeClass={ darkModeSwitch ? 'hTwo' : 'hOne'}
                socialMediaIcon={Youtube}
                userName={`@realnathanf`}
                followerNumber={`11k`}
                caption="F O L L O W E R S"
                arrowIcon={UpArrow}
                value={`12 Today`}
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
            <Col className="col-sm-3 col-md-3">
              <LittleCardComponent
                cardBackground={`${
                  darkModeSwitch ? "cardsbackgroundTwo" : "cardsbackground"
                }`}
                hOnetags={ darkModeSwitch ? 'hTwo' : 'hOne'}
                description="Page Views"
                pTagClass={`${
                  darkModeSwitch ? "pTwo" : "pOne"
                }`}
                valueClass={'upArrowTxt'}
                mediaIcon={facebook}
                numberCount="87"
                arrow={UpArrow}
                value="3%"
              />
            </Col>
            <Col className="col-sm-3 col-md-3">
              <LittleCardComponent
                cardBackground={`${
                  darkModeSwitch ? "cardsbackgroundTwo" : "cardsbackground"
                }`}
                hOnetags={ darkModeSwitch ? 'hTwo' : 'hOne'}
                pTagClass={`${
                  darkModeSwitch ? "pTwo" : "pOne"
                }`}
                valueClass={'downArrowTxt'}
                description="Likes"
                mediaIcon={facebook}
                numberCount="52"
                arrow={DownArrow}
                value="2%"
              />
            </Col>
            <Col className="col-sm-3 col-md-3">
              <LittleCardComponent
                cardBackground={`${
                  darkModeSwitch ? "cardsbackgroundTwo" : "cardsbackground"
                }`}
                hOnetags={ darkModeSwitch ? 'hTwo' : 'hOne'}

                pTagClass={`${
                  darkModeSwitch ? "pTwo" : "pOne"
                }`}
                valueClass={'upArrowTxt'}
                description="Likes"
                mediaIcon={Instagram}
                numberCount="5462"
                arrow={UpArrow}
                value="2257%"
              />
            </Col>
            <Col className="col-sm-3 col-md-3">
              <LittleCardComponent
                cardBackground={`${
                  darkModeSwitch ? "cardsbackgroundTwo" : "cardsbackground"
                }`}
                description="profile Views"
                hOnetags={ darkModeSwitch ? 'hTwo' : 'hOne'}

                mediaIcon={Instagram}
                numberCount="52k"
                pTagClass={`${
                  darkModeSwitch ? "pTwo" : "pOne"
                }`}
                valueClass={'upArrowTxt'}
                arrow={UpArrow}
                value="1375%"
              />
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col className="col-sm-3 col-md-3">
              <LittleCardComponent
                cardBackground={`${
                  darkModeSwitch ? "cardsbackgroundTwo" : "cardsbackground"
                }`}
                description="Retweets"
                mediaIcon={twitter}
                numberCount="117"
                pTagClass={`${
                  darkModeSwitch ? "pTwo" : "pOne"
                }`}
                valueClass={'upArrowTxt'}
                arrow={UpArrow}
                hOnetags={ darkModeSwitch ? 'hTwo' : 'hOne'}

                value="303%"
              />
            </Col>
            <Col className="col-sm-3 col-md-3">
              <LittleCardComponent
                cardBackground={`${
                  darkModeSwitch ? "cardsbackgroundTwo" : "cardsbackground"
                }`}
                description="Likes"
                mediaIcon={twitter}
                numberCount="507"
                hOnetags={ darkModeSwitch ? 'hTwo' : 'hOne'}

                pTagClass={`${
                  darkModeSwitch ? "pTwo" : "pOne"
                }`}
                valueClass={'upArrowTxt'}
                arrow={UpArrow}
                value="553%"
              />
            </Col>
            <Col className="col-sm-3 col-md-3">
              <LittleCardComponent
                cardBackground={`${
                  darkModeSwitch ? "cardsbackgroundTwo" : "cardsbackground"
                }`}
                description="Likes"
                mediaIcon={Youtube}
                numberCount="107"
                pTagClass={`${
                  darkModeSwitch ? "pTwo" : "pOne"
                }`}
                valueClass={'downArrowTxt'}
                hOnetags={ darkModeSwitch ? 'hTwo' : 'hOne'}

                arrow={DownArrow}
                value="19%"
              />
            </Col>
            <Col className="col-sm-3 col-md-3">
              <LittleCardComponent
                cardBackground={`${
                  darkModeSwitch ? "cardsbackgroundTwo" : "cardsbackground"
                }`}
                description="Total Views"
                mediaIcon={Youtube}
                numberCount="1407"
                pTagClass={`${
                  darkModeSwitch ? "pTwo" : "pOne"
                }`}
                valueClass={'downArrowTxt'}
                hOnetags={ darkModeSwitch ? 'hTwo' : 'hOne'}

                arrow={DownArrow}
                value="12%"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
    </div>
  );
};

export default HomeComponent;

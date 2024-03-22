import React from "react";

const CardComponent = (props: {
  socialMediaIcon: string;
  userName: string;
  userNameClass: string;
  followerNumber: string; 
  changeClass: string;
  caption: string;
  arrowIcon: string;
  value: string;
  valueClass: string
  cardBackground: string;
  cardTopStrip: string;
}) => {
  return (
    <div className={` mb-5 ${props.cardBackground}`}>
      <div className={`${props.cardTopStrip}`}>
        <div className="d-flex pt-5 pb-4 align-items-start justify-content-center ">
          <img
            className="pe-2"
            src={props.socialMediaIcon}
            alt="Social Media Icon"
          />
          <p className={`${props.userNameClass}`}>{props.userName}</p>
        </div>

        <div className="">
          <h1 className={`d-flex justify-content-center text-gray ${props.changeClass}`}>
            {props.followerNumber}
          </h1>
          <p className={`${props.userNameClass} d-flex justify-content-center`}>{props.caption}</p>
        </div>

        <div className="d-flex align-items-center justify-content-center mb-5">
          <img src={props.arrowIcon} alt="Up or Down Arrow" />
          <p className={`${props.valueClass}`}>{props.value}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;

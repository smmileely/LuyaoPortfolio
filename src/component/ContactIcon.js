import React from "react";

const ContactIcon = (props) => {
  return (
    <a href={props.link} className="pr-2">
      <button className={`ui ${props.iconStyle} button circular icon`}>
        <i className={`${props.icon} big middle aligned icon`} aria-hidden />
      </button>
    </a>
  );
};

export default ContactIcon;

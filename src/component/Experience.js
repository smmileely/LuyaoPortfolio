import React, { Component } from "react";
import ExperienceTemplate from "./ExperienceTemplate";

class Experience extends Component {
  state = {
    title: "Experience",
    rlb: {
      name: "Quantity Surveyor ",
      period: "Aug 2019 – Present",
      company: "Rider Levett Bucknall LLP",
      det1:
        "Managed a portfolio of construction developments (Residential/ Commercial).",
      det2:
        "Carried out post-contract administration from contract documentation, valuations and variations to ensure the timely delivery of the project and within the projected budget",
      det3:
        "Prepared and presented cost plan to facilitate and fulfil client’s requirement  within the agreed budget.",
      det4:
        "Cultivate strong ties with contractors and clients to negotiate any price differences swiftly and amicably.",
      det5:
        "Responsible for conducting in-house trainings for CostX to more than 50 Quantity Surveyors improving their productivity by 20% through equipping them with new technical skills that are in line with industry standards.",
      id: "rlb",
    },
    emservices: {
      name: "Property Management Intern",
      period: "May 2018 – Aug 2018",
      company: "EM Services Pte Ltd, Singapore",
      det1:
        "Initiated and present a proposal to collaborate with Airbnb and received positive feedback from Airbnb for future collaboration.",
      det2:
        "Oversaw maintenance and rectification work, making sure that they are completed within the stipulated deadline.",
      id: "emservices",
    },
  };
  render() {
    return (
      <div className="py-3">
        <ExperienceTemplate exp={this.state.rlb} />
        <ExperienceTemplate exp={this.state.emservices} />
      </div>
    );
  }
}

export default Experience;

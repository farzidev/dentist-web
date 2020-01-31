import React, { Component } from "react";

export default class ListedDoctors extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "Anna",
      lastName: "Hathaway",
      designation: "Senior Consultant and Head of Department",
      degree: "BDS, Degree2, Degree3",
      field: "Dentist, Dental Surgeon, Implantologist"
    };
  }

  render() {
    return <div className="doctors-list-container"></div>;
  }
}

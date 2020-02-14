import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Doctors } from "./../src/doctors.js";

$(document).ready(function() {
  $("#getDoctors").click(function(event) {
    event.preventDefault();

    (async () => {
      let doctor = new Doctors();
      const response = await doctor.getDoctorByCondition();
      this.getElements(response);
    })();

    function getElements(response) {
      if (response) {
        for (let i = 0; i < response.length; i++) {
          console.log(response.data[i].profile.first_name);
          $("#results").append(`<p>${response.data[i].profile.first_name}</p>`);
        }
      } else {
        console.log("There was an error handling your request");
      }
    }
  });
});

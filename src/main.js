import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Doctors } from "./../src/doctors.js";

$(document).ready(function() {
  $("#getDoctors").click(function(event) {
    event.preventDefault();
    const condition = $("#condition").val();
    $("#condition").val("");

    (async () => {
      let doctors = new Doctors();
      const response = await doctor.getDoctorByCondition(condition);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $(".showDoctors").text(
          `The doctors for your ${condition} are ${response.main.doctors}`
        );
      } else {
        $(".showDoctors").text("There was an error handling your request");
      }
    }
  });
});

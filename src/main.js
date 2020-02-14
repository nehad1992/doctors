import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { DoctorService } from "./../src/doctorService.js";

$(document).ready(function() {
  $("#getDoctors").click(function(event) {
    event.preventDefault();
    const condition = $("#condition").val();
    $("#condition").val("");

    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getDoctorByCondition(condition);
      getElements(response);
    })();

    function getElements(response) {
      var doctorArray = [];
      if (response && response.data && response.data.length > 0) {
        doctorArray = response.data;
      }
      for (var i = 0; i < doctorArray.length; i++) {
        var abcd = doctorArray[i];
        var edfg = abcd.profile;
        console.log(edfg);
      }
      $(".showDoctors").text("There was an error handling your request");
    }
  });
});

//  User Interface

import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { DoctorService } from "./../src/doctorService.js";

$(document).ready(function() {
  // User Interface to find doctors bu condition
  $("#getDoctors").click(function(event) {
    event.preventDefault();
    $(".showDoctors").text("");
    var condition = $("#condition").val();

    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getDoctorByCondition(condition);
      getElements(response);
    })();

    $("#condition").val("");

    function getElements(response) {
      var doctorArray = [];
      if (response && response.data && response.data.length > 0) {
        doctorArray = response.data;
        for (var i = 0; i < doctorArray.length; i++) {
          var doctorsList = doctorArray[i];
          var indDoctor = doctorsList.profile;

          let firstName = indDoctor.first_name;
          let middleName = indDoctor.middle_name;
          let lastName = indDoctor.last_name;

          $(".showDoctors").append(
            "<li>" + firstName + " " + middleName + " " + lastName + "</li>"
          );
        }
      } else {
        $(".showDoctors").text("Invalid entry");
      }
    }
  });

  // User Interface to find doctors by name
  $("#findDoctor").click(function(event) {
    event.preventDefault();
    $(".showDoctorByName").text("");
    var doctorName = $("#doctorName").val();

    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getDoctorByName(doctorName);
      getElements(response);
    })();

    $("#showDoctorByName").val("");

    function getElements(response) {
      var doctorNameArray = [];
      if (response && response.data && response.data.length > 0) {
        doctorNameArray = response.data;
        for (var i = 0; i < doctorNameArray.length; i++) {
          var doctorNameList = doctorNameArray[i];
          var indDoctorByName = doctorNameList.profile;

          let firstNameOfDoctor = indDoctorByName.first_name;
          let middleNameOfDoctor = indDoctorByName.middle_name;
          let lastNameofDoctor = indDoctorByName.last_name;

          $(".showDoctorByName").append(
            "<li>" +
              firstNameOfDoctor +
              " " +
              middleNameOfDoctor +
              " " +
              lastNameofDoctor +
              "</li>"
          );
        }
      } else {
        $(".showDoctorByName").text("Invalid entry");
      }
    }
  });
});

// Business Interface
export class DoctorService {
  // Business Logic to search doctors by condition
  async getDoctorByCondition(condition) {
    try {
      let response = await fetch(
        `https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=37.773%2C-122.413%2C100&skip=0&limit=10&user_key=${process.env.API_KEY}`
      );
      let jsonifiedResponse;
      if (response != null && response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }

      return jsonifiedResponse;
    } catch (error) {
      alert("Invalid Entry!");
    }
  }
  //  Business Logic to search doctors by Name
  async getDoctorByName(name) {
    try {
      let response = await fetch(
        `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${name}&location=47.60623%2C-122.3321%2C100&user_location=47.6062%2C-122.3321&skip=0&limit=10&user_key=${process.env.API_KEY}`
      );
      let jsonifiedResponse;
      if (response != null && response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      alert("Invalid Entry!");
    }
  }
}

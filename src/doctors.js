export class Doctors {
  async getDoctorByCondition() {
    try {
      let response = await fetch(
        `https://api.betterdoctor.com/2016-03-01/doctors?
        query=toothache&location=47.6062%2C-122.3321%2C100&user_location=47.6062%2C-122.3321&
        gender=female&sort=rating-desc&skip=0&limit=10&user_key=${process.env.API_KEY}`
      );
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      console.log("There was an error handling your request:" + error.messeage);
    }
  }
}

export class DoctorService {
  async getDoctorByCondition(condition) {
    //try {

    let response = await fetch(
      `https://api.betterdoctor.com/2016-03-01/doctors?
        query=${condition}&location=47.6062%2C-122.3321%2C100&user_location=47.6062%2C-122.3321&
        gender=female&sort=rating-desc&skip=0&limit=10&user_key=${process.env.API_KEY}`
    );
    let jsonifiedResponse;
    if (response != null && response.ok && response.status == 200) {
      jsonifiedResponse = await response.json();
    } else {
      jsonifiedResponse = false;
    }

    return jsonifiedResponse;
    /** 

    } catch {
      return false;
    }
    */
  }
}

const baseURL = "http://localhost:3001/students/";

const CheckEmailAvailability = async (email) => {
  let URL = baseURL+"checkEmail/"+email;
  try {
    let response = await fetch(URL, {
      method: "GET"
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log(error);
  }
};
export default CheckEmailAvailability;
const baseURL = process.env.REACT_APP_BASE_URL;

const CheckEmailAvailability = async (email) => {
  let URL = baseURL+"/students/checkEmail/"+email;
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
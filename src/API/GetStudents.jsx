const baseURL = process.env.REACT_APP_BASE_URL;

const GetStudents = async () => {
  let URL = baseURL+"/students";
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
export default GetStudents;

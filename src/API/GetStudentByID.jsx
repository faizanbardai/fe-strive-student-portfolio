const baseURL = process.env.REACT_APP_BASE_URL;

const GetStudentByID = async selectedStudentID => {
  let URL = baseURL + "/students/" + selectedStudentID;
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
export default GetStudentByID;

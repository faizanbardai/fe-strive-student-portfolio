const baseURL = process.env.REACT_APP_BASE_URL;

const GetStudentByID = async selectedStudentID => {
  let URL = baseURL + "/students/" + selectedStudentID;
  try {
    let response = await fetch(URL, {
      method: "GET"
    });
    response = await response.json();
      return response;
  } catch (error) {
    return { error: error };
  }
};
export default GetStudentByID;

const baseURL = "http://localhost:3001/students/";

const GetStudentByID = async (selectedStudentID) => {
  let URL = baseURL+selectedStudentID;
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
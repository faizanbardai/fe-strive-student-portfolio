const baseURL = "http://localhost:3001/students";

const GetStudents = async () => {
  let URL = baseURL;
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

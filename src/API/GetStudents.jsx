const baseURL = process.env.REACT_APP_BASE_URL;

const GetStudents = async () => {
  let URL = baseURL + "/students";
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
export default GetStudents;

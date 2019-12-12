const baseURL = process.env.REACT_APP_BASE_URL;

const PostStudents = async (student) => {
  let URL = baseURL+"/students";
  try {
    let response = await fetch(URL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
       },
      body: JSON.stringify(student)
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log(error);
  }
};
export default PostStudents;

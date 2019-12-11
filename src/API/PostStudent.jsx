const baseURL = "http://localhost:3001/students/";

const PostStudents = async (student) => {
  let URL = baseURL;
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

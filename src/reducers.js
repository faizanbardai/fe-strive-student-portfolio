export default (state = {}, action) => {
  switch (action.type) {
    case "SELECT_STUDENT_REDUX":
      return { selectedStudentRedux: action.payload };
    default:
      return state;
  }
}
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  const {students, deleteStudent} = props;

  if (!students.length) {
    return <div>There are no students.</div>;
  }
  
  return (
    <div>
      {students.map((student) => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
          <Link to={`/student/${student.id}`}>
            <h1>{name}</h1>
          </Link>
          <button onClick={() => deleteStudent(student.id)}>Delete</button>
          </div>
        );
      }
      )}
    </div>
  );
};


export default AllStudentsView;
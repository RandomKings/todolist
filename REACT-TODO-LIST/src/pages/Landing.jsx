import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Hey, welcome</h1>

      <div className="mb-4">
        <NameAndStudentID name="Pranav Harish Nathani" studentID="2702293872" />
      </div>

      <Link to="/todo">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Go to Todo List</button>
      </Link>
    </div>
  );
}

function NameAndStudentID({ name, studentID }) {
  return (
    <div className="text-center border border-gray-300 rounded-lg p-4 bg-gray-100">
      <p className="text-lg text-gray-500 font-semibold">{name}</p>
      <p className="text-sm text-gray-500">Student ID: {studentID}</p>
    </div>
  );
}

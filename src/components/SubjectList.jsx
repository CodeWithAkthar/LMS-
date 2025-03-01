// src/components/SubjectList.jsx
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
const SubjectList = ({ subjects }) => {
  return (
    <div className="relative flex flex-col items-center justify-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* Vertical line through all circles */}
      <div className="absolute top-[30px] bottom-[30px] w-1 bg-purple-300 left-[30px] z-0"></div>
      
      {subjects.map((subject, index) => (
        <Link
          key={subject.id}
          to={`/subject/${subject.id}`}
          className="relative z-10 flex items-center justify-center w-full pt-6 pb-6 rounde-lg tansition-shadow hover:shadow-lg"
        >
          <div className="rounded-full bg-[#F2DFFB] border-4 border-[#d07aed] min-w-16 min-h-16 w-16 h-16 flex items-center justify-center mr-4 font-bold z-10">
            {subject.id}
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-white">{subject.title}</h2>
            <p className=" text-amber-300">{subject.description}</p>
          </div>
          <div>
            <FaAngleRight className="w-4 h-6 ml-2 text-white" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SubjectList;
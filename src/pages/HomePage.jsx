import { useEffect, useState } from "react";
import { getSubjects } from "../services/api";
import SubjectList from "../components/SubjectList";
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const [subjects, setSubjects] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    const fetchSubjects = async () => {
      const data = await getSubjects();
      setSubjects(data);
    };
    fetchSubjects();
  }, []);

  return (
    <div className="min-h-screen  bg-[url('/public/bg/bg.jpg')] bg-cover bg-center bg-no-repeat" style={{ backgroundColor: '#7D1FAF' }}>
      {/* Fixed Top Bar */}
      <div className="fixed top-0 left-0 w-full p-4 text-center" style={{ backgroundColor: '#940DDA' }}>
        <h1 className="text-xl font-bold tracking-wider text-white">Subjects</h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-start min-h-screen p-4 pt-24"> 
        {/* Current Course Section */}
        <div className="bg-[#F2DFFB] rounded-lg p-4 mb-4 w-full max-w-md">
          <h2 className="text-sm font-semibold text-gray-800">Current Course:</h2>
          <h2 className="pt-1 mb-2 text-lg font-semibold text-gray-800">PHYSICS - Beginner</h2>
          <div className="flex justify-center p-1 text-white bg-purple-600 rounded-full">
            <h3 className="text-lg font-medium tracking-wider" onClick={()=>navigate(`/subject/1`)}>Browse other course</h3>
          </div>
        </div>

        {/* Scrollable Subject List Section */}
        <div className="w-full max-w-md overflow-y-auto" style={{ maxHeight: 'calc(100vh - 240px)' }}> 
          <SubjectList subjects={subjects} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
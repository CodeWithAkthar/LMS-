import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getModules } from '../services/api';
import ModuleList from '../components/ModuleList';
import { CiCircleChevLeft } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

const SubjectPage = () => {
  const { subjectId } = useParams();
  const [modules, setModules] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchModules = async () => {
      const data = await getModules(subjectId);
      setModules(data);
    };
    fetchModules();
  }, [subjectId]);

  return (
    <div
      className="min-h-screen bg-[url('/public/bg/bg.jpg')] bg-cover bg-center bg-no-repeat"
      
    >
      {/* Fixed Top Bar */}
      <div className="fixed top-0 left-0 w-full p-4 text-center ">
        <CiCircleChevLeft className="w-8 h-8 text-white cursor-pointer" 
        onClick={()=>navigate(-1)}/>
      </div>

      <div className="pt-20 h-[calc(100vh-55px)] overflow-y-auto">
        <ModuleList modules={modules} />
      </div>

       <div className="fixed bottom-0 left-0 right-0 z-10 p-4 shadow-lg">
        <button 
        onClick={() => navigate(`/module/${subjectId}?modulename=${modules[subjectId].title}`)}
          className="w-full px-6 py-2 text-lg font-semibold text-purple-600 transition-colors bg-white rounded-llg hover:bg-purple-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SubjectPage;
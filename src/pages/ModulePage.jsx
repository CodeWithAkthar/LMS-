import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate,useSearchParams } from 'react-router-dom';
import { getVideos } from '../services/api';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { TbMessageChatbotFilled } from 'react-icons/tb';

const ModulePage = () => {
  const { moduleId } = useParams();
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const modulename = searchParams.get("modulename");

  useEffect(() => {
    const fetchVideos = async () => {
      const data = await getVideos(moduleId);
      console.log('this is data', data);
      setVideos(data);
    };
    fetchVideos();
  }, [moduleId]);

  // height of the vertical line
  const verticalLineHeight = videos.length * 120;

  return (
    <div
      className="min-h-screen p-6 pt-4"
      style={{
        background: 'linear-gradient(#E8CCFB, #F3E5FA, #FEFFFF)',
      }}
    >
      {/* Fixed Top Bar */}
      <div className="flex items-center justify-center">
        {/* Back Button */}
        <FaAngleLeft
          className="fixed left-0 w-10 h-10 pt-4 text-gray-800 cursor-pointer top-3"
          onClick={() => navigate(-1)} 
        />
        <TbMessageChatbotFilled className="w-12 h-16 text-teal-400" />
      </div>

      {/* Module ID */}
      <div className="pt-16">
        <h3 className="font-thin">Module {moduleId}</h3>
        <h1 className="font-extrabold">{modulename}</h1>
      </div>

      {/* Video List Section */}
      <div className="relative pb-32 mt-8"> 
        {/* Vertical Line */}
        <div
          className="absolute w-1 bg-[#9111D5] left-[20px] z-0"
          style={{
            top: '30px', 
            height: `${verticalLineHeight}px`, 
          }}
        ></div>

        {/* Video Items */}
        <div className="flex flex-col justify-between space-y-6">
          {videos.map((video, index) => (
            <Link
              key={video.id}
              to={`/module/video/${video.id}`}
              className="relative z-10 flex items-center justify-between w-full pt-6 pb-6 transition-shadow rounded-lg hover:shadow-lg"
            >
              {/* Circle with Number */}
              <div className="flex">
                <div className="rounded-full bg-[#9111D5] border-4 border-[#c560e6] min-w-12 min-h-12 w-12 h-12 flex items-center justify-center mr-4 font-bold z-10">
                  {index + 1}
                </div>

                {/* Video Title and Description */}
                <div className="flex flex-col">
                  <p className="font-light text-black">Video {index + 1}</p>
                  <h2 className="text-xl font-semibold text-black">{video.title}</h2>
                </div>
              </div>

              {/* Right Arrow */}
              <div>
                <FaAngleRight className="w-4 h-6 ml-2 text-gray-700" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      
      <div className="fixed bottom-0 left-0 right-0 z-10 p-4 shadow-lg">
        <button 
        onClick={() => navigate(`/module/video/1`)}
          className="w-full px-6 py-2 text-lg font-semibold text-white transition-colors bg-purple-600 rounded-llg hover:bg-purple-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ModulePage;
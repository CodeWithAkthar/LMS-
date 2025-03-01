import React, { useEffect, useState } from "react"; 
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { getVideos } from "../services/api";
import ReactPlayer from "react-player";
import { BsFillQuestionOctagonFill } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";

const VideoPage = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getVideos(moduleId);
        setVideos(data);
      } catch (err) {
        setError("Failed to fetch videos");
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, [moduleId]);

  // Check if videos are loaded and if the selected video exists
  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!videos.length) {
    return <div className="text-center">No videos found.</div>;
  }


  const video = videos[moduleId-1];

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Top Bar */}
      <div className="flex items-center justify-center">
        {/* Back Button */}
        <div
          className="fixed w-10 h-10 pt-4 text-gray-800 cursor-pointer left-2 top-3"
          onClick={() => navigate(-1)}
        >
          <FaAngleLeft />
        </div>
      </div>

      {/* Video  */}
      <div className="mt-16">
        <div className="rounded-lg">
          <div className="h-64 mt-4">
            <ReactPlayer
              url={video.video_url}
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
          <div className="p-4">
            <p className="text-sm text-blue-400">Unlock the next lesson by watching 75% of this video</p>
            <h2 className="text-lg font-semibold">{video.title}</h2>
            <p className="text-gray-600">{video.description}</p>
            <div className="grid h-12 grid-flow-col grid-cols-2 gap-1 mt-6 text-center ">
              <div className="flex items-center justify-center border-2 border-gray-400 rounded-lg">
                <IoMdDownload className="mr-2" />
                Download
              </div>
              <div className="flex items-center justify-center border-2 border-gray-400 rounded-lg text-b">
                <BsFillQuestionOctagonFill className="mr-2" />
                Doubts
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
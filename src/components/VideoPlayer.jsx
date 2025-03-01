// src/components/VideoPlayer.jsx
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }) => {
  return (
    <div className="aspect-video">
      <ReactPlayer
        url={url}
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;
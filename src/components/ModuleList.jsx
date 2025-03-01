import { Link } from 'react-router-dom';

const ModuleList = ({ modules }) => {
  return (
    <div className="relative">
      {modules.map((module, index) => (
        <Link
          key={module.id}
          to={`/module/${module.id}?modulename=${module.title}`}
          className="relative block"
        >
          {/* Module Title */}
          <h1
            className="w-[100px] text-white text-[12px] absolute"
            style={{
              top: `${index * 200 - 33}px`, 
              left: index % 2 === 0 ? '70px' : 'calc(100% - 150px)', 
            }}
          >
            {module.title}
          </h1>

          {/* Module Number Circle */}
          <div
            className="absolute rounded-full bg-[#F2DFFB] border-4 border-[#d07aed] w-16 h-16 flex items-center justify-center font-bold z-10"
            style={{
              top: `${index * 200}px`, // Adjust vertical spacing
              left: index % 2 === 0 ? '65px' : 'calc(100% - 125px)', // Alternate left and right
            }}
          >
            {index + 1}
          </div>

          {/* Right Curved Arrow (for even-indexed modules) */}
          {index % 2 === 0 && index !== modules.length - 1 && ( // Don't show arrow for the last module
            <img
              src="/pointers/arrow_rigth.png"
              alt="right arrow"
              className="absolute w-[175px] h-[150px] z-0"
              style={{
                top: `${index * 200 + 75}px`, // Adjust vertical spacing
                left: '75px', // Adjust horizontal spacing
              }}
            />
          )}

          {/* Left Curved Arrow  */}
          {index % 2 !== 0 && index !== modules.length - 1 && ( 
            <img
              src="/pointers/left_arrow.png"
              alt="left arrow"
              className="absolute w-[175px] h-[150px] z-0"
              style={{
                top: `${index * 200 + 75}px`, 
                right: '90px', 
              }}
            />
          )}
        </Link>
      ))}
    </div>
  );
};

export default ModuleList;
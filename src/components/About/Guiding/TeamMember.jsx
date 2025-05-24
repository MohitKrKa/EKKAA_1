import BgLine from "./bgline";

const TeamMember = ({ imageSrc, name, title }) => {
  return (
    <div className=" flex flex-col  font-[Poppins] space-y-4 items-center text-center md:items-end md:text-right">
      {/* BgLine appears only on desktop */}
      {/* {showLine && (
        <div className="absolute  border-2 top-0 z-0 w-full flex justify-center md:justify-end">
          <BgLine />
        </div>
      )} */}

      {/* Member Image */}
      <div className=" z-10 flex">
        <img
          src={imageSrc}
          alt={name}
          // className="h-[30vh]  sm:h-[35vh] md:h-[40vh] object-contain"
          className={`md:h-[40vh] `}
        />
      </div>

      {/* Member Info */}
      <div className="flex flex-col  items-end md:gap-2 ">
        {title && <h4 className="md:text-sm text-xs text-[#6F6F6F] text-end">{title}</h4>}
        <h3 className="md:text-lg text-xs font-[400] text-[#000000]">{name}</h3>
        <span className=" text-[#5B5B5B] uppercase cursor-pointer border-b border-transparent transition duration-300 hover:border-[#5B5B5B] md:text-[1.2rem] text-xs">
          Read more
        </span>
      </div>
    </div>
  );
};

export default TeamMember;

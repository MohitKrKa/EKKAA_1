import React, { useEffect, useState } from "react";
import member1 from "/About/Guiding/m1.png";
import member2 from "/About/Guiding/m2.png";
import member3 from "/About/Guiding/m3.png";
import member4 from "/About/Guiding/m4.png";

import TeamMember from "./TeamMember";

const teamMembersData = [
  {
    imageSrc: member1,
    title: "President",
    name: "Mr. Praveen Goyal",
    readMoreLink: "#",

  },
  {
    imageSrc: member2,
    title: "Managing Director",
    name: "Mr. Sagar Gupta",
    readMoreLink: "#",

  },
  {
    imageSrc: member3,
    title: "Chairman",
    name: "Mr. C.P. Gupta",
    readMoreLink: "#",

  },
  {
    imageSrc: member4,
    title: "Chief Executive Officer (CEO)",
    name: "Ms. Sonam Gupta",
    readMoreLink: "#",

  },
];

const Guiding = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex flex-col gap-10 justify-center items-center bebas-neue bg-white m-10  overflow-hidde`">
      <h2 className="text-center uppercase mb-8 text-5xl font-[200] text-[#011E4D]">
        Guiding the Way Forward
      </h2>


        <div className="flex justify-center gap-4 md:flex-row flex-col  mb-8">
          {teamMembersData.map((member, index) => (
            <div key={index} className="relative  md:w-[20vw] w-[20vh]">
              <TeamMember {...member} />
            </div>
          ))}
        </div>

    </div>
  );
};

export default Guiding;

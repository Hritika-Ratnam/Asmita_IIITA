import React from "react";
import MembersGrid from "../component/MemberGrid.jsx";
import img1 from "../assets/img1.jpg";

/*
Heads of Activities:

Dean SA's Photo

Name (Dean SA)

FIC Photo

Name (FIC Sports)

Sports Staff:

Students: (Names of students here)

Example: Sagar, Rohit, Nishad, Nishant

Spirit Society (Students):
*/
export const People = () => {
  const boardMembers = [
    {
      id: 1,
      name: "John Smith",
      position: "Chairman",
      imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "CEO",
      imageUrl: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "CFO",
      imageUrl: "https://randomuser.me/api/portraits/men/7.jpg",
    },
  ];

  const sportsStaff = [
    {
      id: 1,
      name: "John Smith",
      imageUrl: img1,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 3,
      name: "Michael Chen",
      imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
    },
  ];
  const studentList = [
    {
      id: 4,
      name: "Emily Davis",
      imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 5,
      name: "David Lee",
      imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 6,
      name: "Olivia Brown",
      imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 7,
      name: "Chris Wilson",
      imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 8,
      name: "Sophia Martinez",
      imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 9,
      name: "Daniel Anderson",
      imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: 10,
      name: "Emma Thomas",
      imageUrl: "https://randomuser.me/api/portraits/women/5.jpg",
    },
  ];

  return (
    <div className="flex flex-col gap-3 mt-4 justify-center items-center w-full">
      <div className="flex flex-col gap-2">
        <p>Our Patreon</p>
        <div className="w-79 h-79 overflow-hidden border-4 border-[#00916f] shadow-md mb-3 rounded-md ">
          <img
            src="https://randomuser.me/api/portraits/men/11.jpg"
            alt="Our Patreon"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <h3 className="font-medium text-gray-800 text-sm">Name</h3>{" "}
        </div>
      </div>
      <MembersGrid boardMembers={boardMembers} title={"Head of Activities"} />
      <MembersGrid boardMembers={sportsStaff} title={"Sports Staff"} />
      <MembersGrid
        boardMembers={studentList}
        title={"Spirit Society (Students)"}
      />
    </div>
  );
};

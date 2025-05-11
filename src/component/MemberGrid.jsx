import React from "react";

const BoardMembersGrid = (props) => {
  const { boardMembers, title } = props;
  // Sample data for board members

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {" "}
      {/* Reduced max-width */}
      <h2 className="text-2xl font-bold text-left mb-8">{title}</h2>{" "}
      {/* Smaller heading */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-10 md:gap-20">
        {" "}
        {/* Adjusted columns */}
        {boardMembers.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <div className="w-32 h-32 overflow-hidden border-4 border-white shadow-md mb-3">
              {" "}
              {/* Smaller circular images */}
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="font-medium text-gray-800 text-sm">
                {member.name}
              </h3>{" "}
              {/* Smaller text */}
              <p className="text-xs text-gray-600 mt-1">
                {member.position}
              </p>{" "}
              {/* Smaller text */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardMembersGrid;

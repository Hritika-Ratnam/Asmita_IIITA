import React from "react";

const Event = (props) => {
  const { title, events } = props;

  // Format date to "Month Day, Year" (e.g. "November 15, 2023")
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>

      <div className="space-y-2">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 px-4 py-3 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between ">
              <div className="mb-3 sm:mb-0">
                <h3 className="text-md font-semibold text-gray-800">
                  {event.name}
                </h3>
              </div>
              <div className="flex items-center">
                <div className="bg-gray-50 rounded-lg p-3 text-center min-w-[100px]">
                  <p className="text-[#00916f] font-medium text-sm">
                    {formatDate(event.date)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;

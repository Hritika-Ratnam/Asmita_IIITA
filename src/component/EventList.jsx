import React from "react";

const EventList = (props) => {
  const { events } = props;

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Events Schedule</h2>

      <div className="space-y-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="grid grid-cols-3 divide-x divide-gray-200">
              <div className="p-6 flex items-top">
                <h3 className="text-lg font-semibold text-[#00916f]">
                  {event.name}
                </h3>
              </div>

              <div className="col-span-2 p-6">
                <div className="space-y-3">
                  {event.types.map((eventType, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-700 font-medium">
                        {eventType.type}
                      </span>
                      <span className="text-gray-500 text-sm bg-gray-100 px-2 py-1 rounded">
                        {formatDate(eventType.date)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;

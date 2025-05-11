import React, { useState, useEffect, useRef } from "react";
import "./AnnouncementsAndEvents.css"; // Import your CSS file for the marquee effect

const AnnouncementsAndEvents = () => {
  const announcements = [
    "Team selection trials on Monday at 10 AM",
    "Practice nets closed this Friday for maintenance",
    "Registrations for summer cricket camp now open",
    "Cricket talent hunt event coming next month - prepare your gear",
    "Pitch and outfield maintenance scheduled for tomorrow night",
  ];

  const events = [
    { id: 1, title: "Ayushi Kumari", date: "2023-11-15", location: "1st Place" },
    { id: 2, title: "Meera Kapoor", date: "2023-11-20", location: "2nd Place" },
    { id: 3, title: "Rohan Verma", date: "2023-11-25", location: "3rd Place" },
    { id: 4, title: "Nisha Patel", date: "2023-12-02", location: "4th Place" },
  ];

  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [announcements.length]);

  return (
    <div className="w-full py-6">
      {/* Full-width Announcement Ticker */}
      <div className="w-full bg-[#34ba9b] text-white py-3 mb-8 overflow-hidden marquee-wrapper">
      <div className="animate-marquee whitespace-nowrap">
        {[...announcements, ...announcements].map((announcement, index) => (
          <span key={index} className="mx-8 text-lg font-medium inline-block">
            {announcement} •
          </span>
        ))}
      </div>
    </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Announcements Section */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-[#00916f] mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800">
                Announcements
              </h3>
            </div>

            <div className=" overflow-y-auto">
              {announcements.map((announcement, index) => (
                <div key={index} className="p-4 border-b border-gray-100">
                  <p className="text-gray-700">{announcement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-yellow-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 21h8m-4-4v4m0-4a6 6 0 006-6V5H6v6a6 6 0 006 6zm6-11h2a2 2 0 012 2v1a5 5 0 01-5 5m-8-8H4a2 2 0 00-2 2v1a5 5 0 005 5"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800">
                Congratulations
              </h3>
            </div>

            <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-800">
                        {event.title}
                      </h4>
                      <p className="text-sm text-gray-500">{event.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-[#00916f]">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                      <p className="text-xs text-gray-400">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "short",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsAndEvents;

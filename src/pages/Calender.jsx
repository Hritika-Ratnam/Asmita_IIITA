import React from "react";
import Event from "../component/Event";
import EventsList from "../component/EventList";

export const Calender = () => {
  const events = [
    {
      id: 1,
      name: "Asmita Dates",
      types: [
        { type: "Inauguration", date: "2025-05-10" },
        { type: "Cultural Program", date: "2025-05-11" },
        { type: "Closing Ceremony", date: "2025-05-12" },
      ],
    },
    {
      id: 2,
      name: "Inter Sports Meet (Students) Dates",
      types: [
        { type: "Opening Match", date: "2025-06-01" },
        { type: "Semi Final", date: "2025-06-05" },
        { type: "Final Match", date: "2025-06-07" },
      ],
    },
    {
      id: 3,
      name: "Inter Sports Meet (Employees) Dates",
      types: [
        { type: "Opening Ceremony", date: "2025-07-10" },
        { type: "Group Stage Matches", date: "2025-07-11" },
        { type: "Finals & Prize Distribution", date: "2025-07-15" },
      ],
    },
    {
      id: 4,
      name: "Marathon Dates",
      types: [
        { type: "Registration Start", date: "2025-08-01" },
        { type: "Marathon Day", date: "2025-08-15" },
      ],
    },
    {
      id: 5,
      name: "FIT India Activities All Over India Dates",
      types: [
        { type: "Yoga Session", date: "2025-09-05" },
        { type: "Cycling Event", date: "2025-09-10" },
        { type: "Fitness Challenge", date: "2025-09-15" },
      ],
    },
  ];

  return (
    <div>
      <EventsList events={events} />
    </div>
  );
};

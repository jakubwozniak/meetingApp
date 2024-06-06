"use client";

import { getFormattedDate, getFormattedTime } from "@/lib/utils";
import React, { Suspense, useEffect, useState } from "react";

const UpcomingMeeting = () => {
  const [date, setDate] = useState(new Date());
  const formatedDate = getFormattedDate(date);
  const formatedTime = getFormattedTime(date);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
      <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
        <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
          Upcomming Meeting at: 12:30 PM
        </h2>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-extrabold lg:text-7xl">
            <Suspense>{date && formatedTime}</Suspense>
          </h1>
          <p className="text-lg font-medium text-sky-1 lg:text-2xl">
            {formatedDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMeeting;

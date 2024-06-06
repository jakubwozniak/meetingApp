import MeetingTypeList from "@/components/MeetingTypeList";
import UpcomingMeeting from "@/components/UpcomingMeeting";
import { getFormattedDate, getFormattedTime } from "@/lib/utils";
import React, { Suspense, useEffect, useState } from "react";

const Home = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <UpcomingMeeting />
      <MeetingTypeList />
    </section>
  );
};

export default Home;

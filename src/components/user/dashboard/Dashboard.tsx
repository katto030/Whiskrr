import React from "react";
import Calendar from "./dashboard-sub/Calendar";
import CurrentFoster from "./dashboard-sub/CurrentFoster";
import DailyLog from "./dashboard-sub/DailyLog";
import FormList from "./dashboard-sub/FormList";

interface Props {
  user: string;
}
const Dashboard: React.FC<Props> = ({ user }) => {
  return (
    <div>
      Welcome back, {user} !
      <CurrentFoster />
      <Calendar />
      <DailyLog />
      <FormList />
      View Past Fosters
    </div>

  )
}

export default Dashboard;
import Title from "./common/Title";
// import ActivitiesCard from "./common/ActivitesCard";
import { PiRoadHorizonLight } from "react-icons/pi";
import EmptyState from "./common/Empty";

const Activities = () => {
  return (
    <div className="mt-3 xl:p-4 p-3 bg-[#0054E4]">
      <Title
        buttonColor="bg-[#FFFFFF]"
        buttonTextColor="text-[#1D2433]"
        title="Activities"
        Icon={PiRoadHorizonLight}
      />
      {/* <ActivitiesCard /> */}
      <EmptyState
        icon="/svg/activte.svg"
        message="No activities found. Add a new one to get started!"
        buttonLabel="Add Activity"
        onButtonClick={() => alert("Add new activity")}
        className="min-h-[300px]"
      />
    </div>
  );
};

export default Activities;

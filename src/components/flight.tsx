import Title from "./common/Title";
import FlightCard from "./common/flightCard";
import { PiAirplaneInFlightDuotone } from "react-icons/pi";

function Flight() {
  return (
    <div className="mt-[28px] xl:p-4 p-3 bg-[#F0F2F5]">
      <Title
        buttonColor="bg-[#FFFFFF]"
        buttonTextColor="text-[#0D6EFD]"
        title="Flights"
        Icon={PiAirplaneInFlightDuotone}
      />
      <FlightCard />
    </div>
  );
}

export default Flight;

import { useState, type Dispatch, type SetStateAction } from "react";
import Title from "./common/Title";
import FlightCard, { type Flight } from "./common/flightCard";
import { PiAirplaneInFlightDuotone } from "react-icons/pi";
import SearchModal from "./common/searchModal";
import { FlightForms } from "./common/modalsForms";
import { FlightSearch } from "../utils/helper";
import ErrorBox from "./common/error";
import EmptyState from "./common/Empty";

interface FlightProps {
  flightModal: boolean;
  setFlightModal: Dispatch<SetStateAction<boolean>>;
}
function FlightComponent({ flightModal, setFlightModal }: FlightProps) {
  const handleOnClose = () => setFlightModal(false);

  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Flight[]>([]);
  const [selectedFlight, setSelectedFlight] = useState<Flight>();

  const handleFetchFlights = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const flight = await FlightSearch(location);

      if (!flight.length) {
        setError(`No flight found `);
        return;
      }
      setData(flight);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError("Failed to find  flight. Please try again.");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="mt-[28px] xl:p-4 p-3 rounded-sm bg-[#F0F2F5]">
        <Title
          buttonColor="bg-[#FFFFFF]"
          buttonTextColor="text-[#0D6EFD]"
          title="Flights"
          Icon={PiAirplaneInFlightDuotone}
          onClick={() => setFlightModal(true)}
        />
        {selectedFlight ? (
          <FlightCard flight={selectedFlight} />
        ) : (
          <EmptyState
            icon="/svg/flight.svg"
            buttonLabel="Add Flight"
            onButtonClick={() => setFlightModal(true)}
          />
        )}
      </div>
      {flightModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300">
          <div className="relative w-full  h-[80vh]  bg-white rounded-xl shadow-lg p-6 animate-fade-in scale-95 transition-all duration-300 ease-in-out">
            <button
              className="absolute top-4 right-4 text-[#0D6EFD] text-2xl font-bold hover:text-[#0B5ED7] transition-colors"
              onClick={() => handleOnClose}
              aria-label="Close Modal"
            >
              &times;
            </button>

            <div className="w-full flex justify-center my-3">
              {" "}
              <h1 className="font-poppins font-semibold xl:leading-[23px] text-lg">
                Flights activities
              </h1>
            </div>

            {error && <ErrorBox message={error} />}
            <SearchModal onClose={handleOnClose}>
              <FlightForms
                location={location}
                setLocation={setLocation}
                onClick={handleFetchFlights}
                isLoading={isLoading}
                data={data}
                onClose={handleOnClose}
                onSelect={(data) => {
                  setSelectedFlight(data);
                  setFlightModal(false);
                }}
              />
            </SearchModal>
          </div>
        </div>
      )}
    </>
  );
}

export default FlightComponent;

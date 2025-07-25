import { ActivitiesCard, type Attraction } from "./ActivitesCard";
import Button from "./Button";
import FlightCard, { type Flight } from "./flightCard";
import HotelCard, { type HotelCardData } from "./HotelCard";
import Spinner from "./loader";

interface ActiviteProps {
  location: string;
  setLocation: (value: string) => void;
  onClick: () => void;
  isLoading: boolean;
  attractions: Attraction[];
  onClose: () => void;
  onSelect: (value: Attraction) => void;
}
export const ActivitiesForms = (props: ActiviteProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onClick();
    props.setLocation("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-4  space-y-3"
      >
        <div className="flex flex-col">
          <label className="font-poppins text-lg font-medium text-[#676E7E]">
            Location
          </label>
          <input
            type="text"
            placeholder="Enter location"
            value={props.location}
            onChange={(e) => props.setLocation(e.target.value)}
            className="border border-gray-300 focus:border-[#0B5ED7] focus:outline-none rounded px-3 py-2 mt-2 font-poppins transition duration-200"
            required
          />
        </div>

        <Button
          type="submit"
          disabled={!props.location}
          className={`${
            props.isLoading
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-700"
          } bg-[#0D6EFD] text-white font-poppins py-2 rounded hover:bg-[#0B5ED7] transition-colors cursor-pointer`}
        >
          Add Activity
        </Button>
      </form>
      {props.isLoading && (
        <div className="w-full flex justify-center my-4">
          <Spinner />
        </div>
      )}
      <>
        {props.attractions
          ?.slice(0, 2)
          ?.map((activites: Attraction, index: number) => (
            <ActivitiesCard
              key={index}
              selectedActivity={activites}
              onSelect={(activites: Attraction) => {
                props.onSelect(activites);
                props.onClose();
              }}
            />
          ))}
      </>
    </>
  );
};

interface FlightsFormProps {
  location: string;
  setLocation: (value: string) => void;
  onClick: () => void;
  isLoading: boolean;
  data: Flight[];
  onClose: () => void;
  onSelect: (value: Flight) => void;
}

export const FlightForms = ({
  location,
  setLocation,
  onClick,
  isLoading,
  data,
  onClose,
  onSelect,
}: FlightsFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClick();
    setLocation("");
  };
  console.log(data);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-4  space-y-3"
      >
        <div className="flex flex-col">
          <label className="font-poppins text-lg font-medium text-[#676E7E]">
            Location
          </label>
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 focus:border-[#0B5ED7] focus:outline-none rounded px-3 py-2 mt-2 font-poppins transition duration-200"
            required
          />
        </div>

        <Button
          type="submit"
          disabled={!location}
          className={`${
            isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          } bg-[#0D6EFD] text-white font-poppins py-2 rounded hover:bg-[#0B5ED7] transition-colors cursor-pointer`}
        >
          {isLoading ? "Searching..." : "Find Flight"}
        </Button>
      </form>
      {isLoading && (
        <div className="w-full flex justify-center my-4">
          <Spinner />
        </div>
      )}
      <>
        {data?.slice(0, 2)?.map((flight, index: number) => (
          <FlightCard
            flight={flight}
            key={index}
            onSelect={(hotel) => {
              onSelect(hotel);
              onClose();
            }}
          />
        ))}
      </>
    </>
  );
};

interface HotelsFromProps {
  query: string;
  setQuery: (value: string) => void;
  onClick: () => void;
  isLoading: boolean;
  data: HotelCardData[];
  onClose: () => void;
  onSelect: (value: HotelCardData) => void;
}

export const HotelsForms = ({
  query,
  setQuery,
  isLoading,
  onClick,
  data,
  onSelect,
  onClose,
}: HotelsFromProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClick();
    setQuery("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-4  space-y-3"
      >
        <div className="flex flex-col">
          <label className="font-poppins text-lg font-medium text-[#676E7E]">
            Hotel Location
          </label>
          <input
            type="text"
            placeholder="Enter  hotel location "
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border border-gray-300 focus:border-[#0B5ED7] focus:outline-none rounded px-3 py-2 mt-2 font-poppins transition duration-200"
            required
          />
        </div>

        <Button
          type="submit"
          disabled={!query}
          className={`${
            isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          } bg-[#0D6EFD] text-white font-poppins py-2 rounded hover:bg-[#0B5ED7] transition-colors cursor-pointer`}
        >
          {isLoading ? "Searching..." : "Find Hotel"}
        </Button>
      </form>
      {isLoading && (
        <div className="w-full flex justify-center my-4">
          <Spinner />
        </div>
      )}
      <>
        {data?.slice(0, 2)?.map((hotel, index: number) => (
          <HotelCard
            key={index}
            hotel={hotel}
            onSelect={(hotel) => {
              onSelect(hotel);
              onClose();
            }}
          />
        ))}
      </>
    </>
  );
};

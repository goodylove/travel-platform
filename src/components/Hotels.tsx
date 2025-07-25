import { PiWarehouseBold } from "react-icons/pi";
import Title from "./common/Title";
import HotelCard, { type HotelCardData } from "./common/HotelCard";
import { useState, type Dispatch, type SetStateAction } from "react";
import SearchModal from "./common/searchModal";
import { HotelsForms } from "./common/modalsForms";
import { HotelsSearch } from "../utils/helper";
import ErrorBox from "./common/error";
import EmptyState from "./common/Empty";

interface HotelProps {
  hotelModal: boolean;
  setHotelModal: Dispatch<SetStateAction<boolean>>;
}
function Hotel({ hotelModal, setHotelModal }: HotelProps) {
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<HotelCardData[]>([]);
  const [selectedHotel, setSelectedHotel] = useState<HotelCardData | null>(
    null
  );
  const handleOnClose = () => setHotelModal(false);

  const handleHotelsSearch = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const hotels = await HotelsSearch(query);
      if (!hotels.length) {
        setError(`No hotel found `);
        return;
      }
      setData(hotels);
    } catch (error: unknown) {
      setError("Failed to fetch hotel. Please try again.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="mt-3 xl:p-4 p-3 bg-[#344054] rounded-sm">
        <Title
          buttonColor="bg-[#FFFFFF]"
          buttonTextColor="text-[#1D2433]"
          title="Hotels"
          Icon={PiWarehouseBold}
          onClick={() => setHotelModal(true)}
        />

        {selectedHotel ? (
          <HotelCard hotel={selectedHotel} />
        ) : (
          <EmptyState
            icon="/svg/hotel 1.svg"
            buttonLabel="Add Hotels"
            onButtonClick={() => setHotelModal(true)}
          />
        )}
      </div>
      {hotelModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300 ">
          <div className="relative w-full max-w-2xl h-[80vh] bg-white overflow-y-scroll rounded-xl shadow-lg p-6 animate-fade-in scale-95 transition-all duration-300 ease-in-out">
            <button
              className="absolute top-4 right-4 text-[#0D6EFD] text-2xl font-bold hover:text-[#0B5ED7] transition-colors"
              onClick={() => handleOnClose}
              aria-label="Close Modal"
            >
              &times;
            </button>

            <div className="w-full flex justify-center">
              {" "}
              <h1 className="font-poppins font-semibold xl:leading-[23px] text-lg">
                Hotels Activities
              </h1>
            </div>
            {error && <ErrorBox message={error} />}

            <SearchModal onClose={handleOnClose}>
              <HotelsForms
                query={query}
                setQuery={setQuery}
                onClick={handleHotelsSearch}
                isLoading={isloading}
                data={data}
                onClose={handleOnClose}
                onSelect={(hotel) => {
                  setSelectedHotel(hotel);
                  setHotelModal(false);
                }}
              />
            </SearchModal>
          </div>
        </div>
      )}
    </>
  );
}

export default Hotel;

import { useState, type Dispatch, type SetStateAction } from "react";
import { PiRoadHorizonLight } from "react-icons/pi";
import {
  ActivitieSearchLocation,
  ActivitiesSearchAttractions,
} from "../utils/helper";
import Title from "./common/Title";
import { ActivitiesCard, type Attraction } from "./common/ActivitesCard";
import ErrorBox from "./common/error";
import SearchModal from "./common/searchModal";
import { ActivitiesForms } from "./common/modalsForms";
import EmptyState from "./common/Empty";

interface ActivitesProps {
  activateModal: boolean;
  setActivateModal: Dispatch<SetStateAction<boolean>>;
}
const Activities = ({ activateModal, setActivateModal }: ActivitesProps) => {
  const handleOnClose = () => setActivateModal(false);

  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [selectedActivity, setSeletedActivities] = useState<Attraction | null>(
    null
  );
  console.log(selectedActivity);

  const handleFetchActivites = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const destinations = await ActivitieSearchLocation(location);

      if (!destinations.length) {
        setError(`No Attraction found  "`);
        return;
      }

      const id = destinations?.[0]?.id;

      if (!id) {
        setError("No valid destination ID found.");
        return;
      }

      const fetchedAttractions = await ActivitiesSearchAttractions(id);
      console.log(fetchedAttractions.products);
      setAttractions(fetchedAttractions.products);
    } catch (err: unknown) {
      setError("Failed to fetch activities. Please try again.");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="mt-3 xl:p-4 p-3 bg-[#0054E4] rounded-sm">
        <Title
          buttonColor="bg-[#FFFFFF]"
          buttonTextColor="text-[#1D2433]"
          title="Activities"
          Icon={PiRoadHorizonLight}
          onClick={() => setActivateModal(true)}
        />

        {selectedActivity ? (
          <ActivitiesCard selectedActivity={selectedActivity} />
        ) : (
          <EmptyState
            icon="/svg/activte.svg"
            buttonLabel="Add Activities"
            onButtonClick={() => setActivateModal(true)}
          />
        )}
      </div>

      {activateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300">
          <div className="relative w-full max-w-3xl h-[80vh] bg-white rounded-xl shadow-lg p-6 animate-fade-in scale-95 transition-all duration-300 ease-in-out">
            <button
              className="absolute top-4 right-4 text-[#0D6EFD] text-2xl font-bold hover:text-[#0B5ED7] transition-colors"
              onClick={handleOnClose}
              aria-label="Close Modal"
            >
              &times;
            </button>

            <div className="w-full flex justify-center mb-4">
              <h1 className="font-poppins font-semibold text-lg">
                Search Activities
              </h1>
            </div>

            {error && <ErrorBox message={error} />}

            <SearchModal onClose={handleOnClose}>
              <ActivitiesForms
                location={location}
                setLocation={setLocation}
                onClick={handleFetchActivites}
                isLoading={isLoading}
                attractions={attractions}
                onClose={handleOnClose}
                onSelect={(data: Attraction) => {
                  setSeletedActivities(data);
                  setActivateModal(false);
                }}
              />
            </SearchModal>
          </div>
        </div>
      )}
    </>
  );
};

export default Activities;

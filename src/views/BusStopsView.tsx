import BuslineStopsList from "@/components/BuslineStops/BuslineStopsList";
import { BusStopsContext } from "@/components/Timetable/BusStopsContext";
import SearchInput from "@/components/UI/SearchInput";
import React, { ChangeEvent, useContext, useState } from "react";

const BusStopsView = () => {
  const { stops } = useContext(BusStopsContext);

  const [search, setSearch] = useState<string>("");

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="card">
      <SearchInput className="mx-2 my-2" onChange={searchHandler} />
      <BuslineStopsList
        maxHeight={580}
        selectedBusStops={
          search.length
            ? stops.filter((stop) => stop.stop.includes(search))
            : stops
        }
      />
    </div>
  );
};

export default BusStopsView;

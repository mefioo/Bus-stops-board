import React, { useEffect, useState } from "react";
import { StopType } from "@/types";
import axios, { AxiosError } from "axios";
import { Route, Routes } from "react-router";
import {
  NavigationItemType,
  timetableNavigationItems,
} from "../../constants/navigation";
import { BusStopsContext } from "./BusStopsContext";

const TimetableViewContent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [allStops, setAllStops] = useState<StopType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getAllStops = async () => {
      setLoading(true);

      try {
        const res = await axios.get("http://localhost:3000/stops");
        setAllStops(res.data);
      } catch (err) {
        const axiosError = err as AxiosError;
        setError(axiosError.message);
      } finally {
        setLoading(false);
      }
    };

    getAllStops();
  }, []);

  return (
    <BusStopsContext.Provider value={{ error, loading, stops: allStops }}>
      <Routes>
        {timetableNavigationItems.map((item: NavigationItemType) => {
          return <Route path={item.path} element={<item.component />} />;
        })}
      </Routes>
    </BusStopsContext.Provider>
  );
};

export default TimetableViewContent;

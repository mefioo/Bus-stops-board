import BusLinesView from "../views/BusLinesView";
import BusStopsView from "../views/BusStopsView";

export type NavigationItemType = {
  name: string;
  path: string;
  component: React.FC;
};

export const timetableNavigationItems: NavigationItemType[] = [
  {
    name: "Bus Lines",
    path: "/",
    component: BusLinesView,
  },
  {
    name: "Stops",
    path: "/stops",
    component: BusStopsView,
  },
];

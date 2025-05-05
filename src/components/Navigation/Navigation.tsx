import React from "react";
import NavigationItem from "./NavigationItem";
import {
  NavigationItemType,
  timetableNavigationItems,
} from "../../constants/navigation";

const Navigation = () => {
  return (
    <div className="card px-4 d-flex flex-row">
      {timetableNavigationItems.map((item: NavigationItemType) => {
        return <NavigationItem key={item.path} item={item} />;
      })}
    </div>
  );
};

export default Navigation;

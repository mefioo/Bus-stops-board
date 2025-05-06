import { NavigationItemType } from "@/constants/navigation";
import React from "react";
import { NavLink } from "react-router-dom";

type PropTypes = {
  item: Pick<NavigationItemType, "name" | "path">;
};

const NavigationItem = ({ item }: PropTypes) => {
  return (
    <NavLink className="px-4" to={item.path}>
      {item.name}
    </NavLink>
  );
};

export default NavigationItem;

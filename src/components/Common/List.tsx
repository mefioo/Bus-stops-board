import React, { FC } from "react";

interface PropTypes {
  activeItem?: string | null | undefined;
  itemClassName?: string;
  items: string[];
  maxHeight: number | undefined;
  onItemClick?: (item: string) => void;
}

const List: FC<PropTypes> = ({
  activeItem,
  itemClassName = "",
  items,
  maxHeight,
  onItemClick,
}) => {
  return (
    <ul className="overflow-auto" style={{ maxHeight }}>
      {items.map((item) => {
        return (
          <li key={item}>
            <button
              className={`btn ${itemClassName} ${
                activeItem === item ? "active" : ""
              }`}
              onClick={
                onItemClick instanceof Function
                  ? () => onItemClick(item)
                  : undefined
              }
            >
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;

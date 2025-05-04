import React, { FC } from "react";

interface PropTypes {
  text: string;
}

const CardPlaceholder: FC<PropTypes> = ({ text }) => {
  return (
    <div className="w-100 h-100 justify-content-center align-items-center card border-dashed">
      {text}
    </div>
  );
};

export default CardPlaceholder;

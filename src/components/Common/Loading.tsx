import React, { FC } from "react";

interface PropTypes {
  className?: string;
}

const Loading: FC<PropTypes> = ({ className = "" }) => {
  return <div className={className}>Loading...</div>;
};

export default Loading;

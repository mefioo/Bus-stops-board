import React, { FC } from "react";

interface PropTypes {
  text?: string;
}

const GenericError: FC<PropTypes> = ({
  text = "The error occurred. Please try refreshing the page.",
}) => {
  return <p className="my-3">{text}</p>;
};

export default GenericError;

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { BallTriangle } from "react-loader-spinner";
const Loader = () => {
  return (
    <>
      <BallTriangle
        heigth="100"
        width="100"
        color="grey"
        ariaLabel="loading-indicator"
      />
    </>
  );
};

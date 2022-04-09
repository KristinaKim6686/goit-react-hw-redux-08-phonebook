import "react-loader-spinner/dist/react-loader-spinner.cjs.development";
import { Container } from "./Loader.styled";
import { BallTriangle } from "react-loader-spinner";
export const Loader = () => {
  return (
    <Container>
      <BallTriangle
        heigth="100"
        width="100"
        color="white"
        ariaLabel="loading-indicator"
      />
    </Container>
  );
};

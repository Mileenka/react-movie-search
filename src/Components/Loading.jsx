import "./Loading.css";
import { DotLoader } from "react-spinners";

const LoadingPage = () => {
  return (
    <div className="container-loading">
      <DotLoader color="#fac800" />
      <div className="error-container"></div>
    </div>
  );
};

export default LoadingPage;

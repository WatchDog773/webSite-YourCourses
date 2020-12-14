import { useStateContext } from "../../utilities/Context";
import Courses from "./Courses";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const Start = () => {
  const [{ auth }] = useStateContext();
  return (
    <div>
      <Navbar />
      <Courses />
      <Footer />
    </div>
  );
};

export default Start;

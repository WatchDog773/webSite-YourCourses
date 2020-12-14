import { useStateContext } from "../../utilities/Context";
import Courses from "./Courses";
import Navbar from "../common/Navbar";

const Start = () => {
  const [{ auth }] = useStateContext();
  return (
    <div>
      <Navbar />
      <Courses />
    </div>
  );
};

export default Start;

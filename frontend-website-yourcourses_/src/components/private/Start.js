import { useStateContext } from "../../utilities/Context";
import Courses from "./Courses";

const Start = () => {
  const [{ auth }] = useStateContext();
  return (
    <div>
      <h2>Hola mundo, he aqui algunos cursos</h2>
      <h3>
        {auth.message} {auth.user.email}
      </h3>

      <div>
        <Courses />
      </div>
    </div>
  );
};

export default Start;

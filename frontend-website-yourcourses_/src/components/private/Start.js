import { useStateContext } from "../../utilities/Context";

const Start = () => {
  const [{ auth }] = useStateContext();
  return (
    <div>
      <h2>Hola mundo, he aqui algunos cursos</h2>
      <h3>
        {auth.message} {auth.user.email}
      </h3>
    </div>
  );
};

export default Start;

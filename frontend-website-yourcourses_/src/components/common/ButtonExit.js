import { Button } from "react-bootstrap";

import { useStateContext } from "../../utilities/Context";

import { LOGOUT } from "../../utilities/store/reducers/auth.reducer";

//import axios from "axios";

const Exit = () => {
  const [, dispath] = useStateContext();

  const onLogin = (e) => {
    dispath({ type: LOGOUT });
  };

  return (
    <Button onClick={onLogin} className="btn solid">
      Salir
    </Button>
  );
};

export default Exit;

import { Button } from "react-bootstrap";

import { useStateContext } from "../../utilities/Context";

import { LOGOUT } from "../../utilities/store/reducers/auth.reducer";

import { useState } from "react";
import { Redirect } from "react-router-dom";

//import axios from "axios";

const Exit = ({ contenido }) => {
  const [, dispath] = useStateContext();
  const ruta = "/";

  const [redirect, setRedirect] = useState("");
  if (redirect !== "") {
    return <Redirect to={redirect}></Redirect>;
  }

  const onLogin = (e) => {
    dispath({ type: LOGOUT });
    setRedirect(`${ruta}`);
    window.location.reload();
  };

  return (
    <Button onClick={onLogin} className="btn solid">
      {contenido}
    </Button>
  );
};

export default Exit;

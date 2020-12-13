import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";

const ButtonBackLogin = () => {
  const [redirect, setRedirect] = useState("");
  if (redirect !== "") {
    return <Redirect to={redirect}></Redirect>;
  }
  return (
    <div>
      <Button
        onClick={(e) => {
          setRedirect("/login");
        }}
      >
        Iniciar sesion
      </Button>
    </div>
  );
};

export default ButtonBackLogin;

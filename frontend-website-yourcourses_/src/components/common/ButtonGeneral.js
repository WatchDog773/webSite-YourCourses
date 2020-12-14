import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";

const ButtonGeneralBo = ({ ruta, contenido }) => {
  const [redirect, setRedirect] = useState("");
  if (redirect !== "") {
    return <Redirect to={redirect}></Redirect>;
  }
  return (
    <div>
      <Button
        onClick={(e) => {
          setRedirect(`${ruta}`);
        }}
      >
        {contenido}
      </Button>
    </div>
  );
};

export default ButtonGeneralBo;

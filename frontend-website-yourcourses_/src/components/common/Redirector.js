import { useState } from "react";
import { Redirect } from "react-router-dom";

const Redirector = () => {
  let [redirect, setRedirect] = useState("");
  if (redirect !== "") {
    return <Redirect to={redirect}></Redirect>;
  }

  return setRedirect("/login");
};

export default Redirector;

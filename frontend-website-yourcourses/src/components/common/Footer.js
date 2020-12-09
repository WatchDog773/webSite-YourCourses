import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
         
         <MDBCol md="6">
            <h5 className="title">Fin De Página</h5>
            <p>
              
            </p>
          </MDBCol>
        
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href=""> Your Courses</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
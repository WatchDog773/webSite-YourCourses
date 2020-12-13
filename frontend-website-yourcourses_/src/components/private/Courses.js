import { useStateContext } from "../../utilities/Context"
import {paxios} from '../../utilities/Axios';
import { useEffect } from 'react';
import {Card, Container} from 'react-bootstrap';
import {COURSES_LOADING, COURSES_LOADED} from "../../utilities/store/reducers/courses.reducer";

const ListCourses =()=>{
 const [{courses},dispatch]=useStateContext();
 
 //f dummy data
 const ListElements = courses.courses.map((o)=> {
     return(
         <Container>
                  <Card key={o._id}>
         <h2>{o.name}</h2>
         <h3>{o.author}</h3>
     </Card>
         </Container>
);
 });

 useEffect(
     ()=>{
         dispatch({type: COURSES_LOADING})
         paxios.get('/api/courses/allCourses')
         .then(({data})=>{
            dispatch({type: COURSES_LOADED, payload:data})
            console.log(data);
         })
         .catch((ex)=>{
             console.log(ex)
         }); //end paxios
        
         }
    ,   []);

    return (
        <div>
          {ListElements}
        </div>
        
    );
    
};

export default ListCourses;
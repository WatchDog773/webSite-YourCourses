// import { StateContext } from "../../Context";

const initialState = {
    hasMore: true, 
    courses: [],
    total: 0,
    currentPage:1,
    pageLimit:5,
    fetching:false,
    error:"",
    currentId:null,
    searchfilter:"", 

}

export const COURSES_LOADING = "COURSES_LOADING"; 
export const COURSES_LOADED= "COURSES_LOADED"; 
export const COURSES_RESET= "COURSES_RESET"; 
export const COURSES_ERROR= "COURSES_ERROR";
export const COURSES_SET_CURRENT= "COURSES_SET_CURRENT";

const coursesReducer= (state=initialState,action={}) =>{ 
    switch(action.type){
        case COURSES_LOADING: return {...state,fetching:true};

        case COURSES_LOADED:
            return{...state,courses:[...state.courses,...action.payload],fetching:false} 

     /*   case COURSES_RESET: 
        if(action.payload){
            return {...initialState,searchfilter:action.payload.searchfilter}
        }
        else{
            let {
                searchfilter
            }=state;

            return {...initialState,searchfilter:searchfilter}
        }*/
        case COURSES_ERROR:
            return {...state,fetching:false};

        case COURSES_SET_CURRENT: 
            console.log(action); 
            return {...state,currentId:action.payload._id};
            default: return state;

    }
}

export default coursesReducer;
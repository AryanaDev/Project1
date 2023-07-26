import React, { useReducer } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


const initialValue = 0;

const reducer = (state,action) =>{
    switch (action.type){
        case "fard":
            return state + 4
        case "zooj":
            return state + 2
        case "manfi" :
            return state - 1
        default : return state
    }
}

function Counter() {

    const [count,dispatch] = useReducer(reducer,initialValue)
    const handelClick = () => {
        if (initialValue % 2 === 0) {
            dispatch({type: 'fard'});
        } else {
            // If odd, dispatch an action to increment by 2
            dispatch({type: 'zooj'});
        }
    }
    const handelClick1 = () => {
        if (count > 0) {
            dispatch({ type: "manfi" });
        }
    };
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="relative">

                <h2 className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-500 flex justify-center shadow-lg shadow-blue-200/50 items-center w-96 h-96 rounded-full  text-white text-4xl">
                    Counter : {count}
                </h2>

                <button className="absolute top-1/2 -right-60 shadow-lg shadow-blue-200/50 transform  -translate-y-1/2 bg-blue-200 hover:bg-blue-300 text-white font-bold w-28 h-28 rounded-full" onClick={handelClick}>
                    <FontAwesomeIcon icon={faPlus} size="2x" />
                </button>
                <button className="absolute top-1/2 -left-60 shadow-lg shadow-blue-200/50 transform -translate-y-1/2 bg-blue-200 hover:bg-blue-300 text-white font-bold w-28 h-28 rounded-full" onClick={handelClick1 }>
                    <FontAwesomeIcon icon={faMinus} size="2x" />
                </button>
            </div>
        </div>
    );
}

export default Counter;

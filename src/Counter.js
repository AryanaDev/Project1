import React, { useContext } from "react";
import { UserContext } from "./App";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function Counter() {
    const { count, incrementCount, decrementCount } = useContext(UserContext);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="relative">

                <h2 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center shadow-lg shadow-blue-500/50 items-center w-96 h-96 rounded-full  text-white text-4xl">
                    Counter : {count}
                </h2>

                <button className="absolute top-1/2 -right-60 shadow-lg shadow-blue-500/50 transform  -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold w-28 h-28 rounded-full" onClick={incrementCount}>
                    <FontAwesomeIcon icon={faPlus} size="2x" />
                </button>
                <button className="absolute top-1/2 -left-60 shadow-lg shadow-blue-500/50 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold w-28 h-28 rounded-full" onClick={decrementCount}>
                    <FontAwesomeIcon icon={faMinus} size="2x" />
                </button>
            </div>
        </div>
    );
}

export default Counter;

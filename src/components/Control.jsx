import { useDispatch } from "react-redux"
import {increment, decrement, add, subtract} from '../appFeatures/counterSlice'
import { useRef } from "react";
import {toggle} from "../appFeatures/privacySlice"

export default function Control()
{

    const inputElement= useRef();

    const dispatch= useDispatch();

    const handleIncrement= ()=> {
        dispatch(increment())
        
    }

    const handleDecrement= ()=> {
        dispatch(decrement())

    }

    const handleAdd= ()=> {
        dispatch(add({
            num: inputElement.current.value,
        }))

        inputElement.current.value= "";

    }
    //we can also pass a number only in our add method instead of payload it means payload also can a number
    // const handleAdd= ()=> {
    //     dispatch(counterActions.add(
    //          inputElement.current.value,
    //     ))

    //     inputElement.current.value= "";

    // }
    const handleSubtract= ()=> {
        dispatch(subtract(inputElement.current.value))
        inputElement.current.value= "";

    }

    const handleToggle= ()=> {
        dispatch(toggle())
    }

    return(<>
        <div>
            <button onClick={handleIncrement}
            type="button"
            className="bg-blue-700 text-white p-3 m-3 rounded-lg">
                +1
            </button>
            <button onClick={handleDecrement}
            type="button"
            className="bg-blue-700 text-white p-3.5 m-3 rounded-lg">
                -1
            </button>

            <button onClick={handleToggle}
            className="bg-pink-500 p-2 m-3 rounded-md"
            type="button">
                Privacy Toggle
            </button>
            
        </div>

        <div>
            <input className="p-2 rounded-md m-6 w-1/3"
             type="text"
             ref={inputElement}
              placeholder="Enter any number" />
            
        </div>
        <div >
        <button onClick={handleAdd}
            className="bg-green-500 text-white p-2.5 mx-3 rounded-lg"
            >Add</button>
            <button onClick={handleSubtract}
            className="bg-green-500 text-white p-2.5  rounded-lg">Subtract</button>
        </div>
        </>
    )
}
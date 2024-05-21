import { useSelector } from "react-redux"

export default function Display()
{

    //we have to access our slice by their name i.e counter below
    const {counterVal}= useSelector((store)=> store.counter)
    return(
        <div>
            <h1 className="text-white text-lg m-5">The value of count is: {counterVal} </h1>
        </div>
    )
}
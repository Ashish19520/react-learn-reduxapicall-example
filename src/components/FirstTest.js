import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
   useGetSchemaQuery,
   usePostLogInMutation
  } from "../redux/services/shazamCore";

function FirstTest() {
  const dispatch = useDispatch();
//   const { genreListId } = useSelector((state) => state.player);
//   const { data, isFetching, error } = useGetSchemaQuery();

  const [postLogIn, { isLoading, error }] = usePostLogInMutation();

const handleCreateSomething = async () => {
  const result = await postLogIn({"email":"satyam@clavax.us",
  "passwordhash":"Admin@123"});
  console.log(result.data);
};


//   if (isFetching) return( <div>
//     <h1>data is fetching</h1>
//   </div>)

//   if (error) return (<div>
//     <h1>some error occured</h1>
//   </div>)
// console.log(data)

// if (isLoading) return( <div>
//     <h1>data is fetching</h1>
//   </div>)

//   if (error) return (<div>
//     <h1>some error occured</h1>
//   </div>)
//  console.log(data)
  return (
    <div>
        <h1>hello</h1>
        <button onClick={handleCreateSomething}>safola matar</button>
    </div>
  )
}

export default FirstTest
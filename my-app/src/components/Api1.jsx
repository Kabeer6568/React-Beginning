import React from "react";

export const Api1 =async  () => {
    let API_1 = 'https://jsonplaceholder.typicode.com/posts'

    const response = await fetch(API_1)
    console.log(response);
    const data = await response.json()
    console.log(data)
    return showData(data)
}

const showData = (data)=>{
 return(
    <>
        ${data[1].title}
    </>
 )
}

export default Api1 
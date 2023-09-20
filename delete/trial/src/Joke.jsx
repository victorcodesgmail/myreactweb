import React from "react"
import './Joke.css'
import Data from "./Data"

export default function  Joke(Data){
    let badgeText
    if(Data.item.openSpots===0){
        badgeText="SOLD OUT"
    }else if(Data.item.location==="online"){
        badgeText='ONLINE'
    }
    return(

        <div className="jokes">
            {badgeText &&<div className="jokesbadge">{badgeText}</div>}
        <h1>{Data.item.setup}</h1>
        <h4>{Data.item.punchline}</h4>
        {/* <p>{Data.item.key}</p> */}
        <img src={Data.item.image} alt="imagee"/>
        <p>{Data.id}</p>
        </div>
    )

}
// or
// export default function  Joke(Data){
//     let badgeText
//     if(Data.openSpots===0){
//         badgeText="SOLD OUT"
//     }else if(Data.location==="online"){
//         badgeText='ONLINE'
//     }
//     return(

//         <div className="jokes">
//             {badgeText &&<div className="jokesbadge">{badgeText}</div>}
//         <h1>{Data.setup}</h1>
//         <h4>{Data.punchline}</h4>
//         <p>{Data.id}</p>
//         <img src={Data.image} alt="imagee"/>
//         </div>
//     )

// }
 
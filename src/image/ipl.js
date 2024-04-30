import React from "react";

let Team=()=>{
    const ipl=[{
        name:"rcb",
        image:"https://i.pinimg.com/736x/52/4a/27/524a2764ec3740936c9f1ebdbb79e3af.jpg   n",
        players:["duplises","virat","lomror","geln maxwell","dinesh karthik","karan","patidar","siraj","ferguson","C green","akash deep"],
        height:200,
        width:200
    },
    {

     name:"RR",
        image:"https://static.tnnbt.in/thumb/msid-105518854,thumbsize-103694,width-1280,height-720,resizemode-75/105518854.jpg",
        players:["butler","jaishwal","samju","riyan parag","ashwin","bolt","cahal","samdeep sherma","hetmair","avesh khan","druv jurail"],
        height:200,
        width:200,
    }];
    
   return(
    <>
    {
      ipl.map((values,index)=>
      {
        return(
        <>
        <h1>{index+1}.{values.name}</h1>    
        <image src={values.image} height={values.height} width={values.width}></image>
        <ol>
        {
            values.players.map((p)=>{
                return(
               
                    <li>
                       {p}
                    </li>
                )
               
            })
        }
         </ol>

        
        </>
        )

      })
      
    }
    </>
   )

}
export default Team

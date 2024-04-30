let Match=()=>{
let play=[{
    name:"RCB",
    image:"https://bsmedia.business-standard.com/_media/bs/img/article/2024-03/19/full/1710865231-6152.jpg?im=FeatureCrop,size=(826,465)",
    players:["virat","faf","maxi","rajat","dk","lomroar","siraj","camron","fergusonm","yesh"],
    height:200,
    width:200
},{
    name:"Mumbai",
    image:"https://im.rediff.com/cricket/2023/dec/20mi-squad.jpg?w=670&h=900",
    players:["rohith","bumrah","ishan","surya","tilak","hardik","david","D bravis","pyush","arjun"],
    height:200,
    width:200
}]

return(
    <>
    {
       play.map((values,index)=>{
        return(
            <>
                 <h1>{index+1}){values.name}</h1>
                 <img src={values.image} height={values.height} width={values.width} alt="name"></img>
                 <ol>
                    {
                        values.players.map((p)=>{
                            return(
                               <li>{p}</li>
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
export default Match
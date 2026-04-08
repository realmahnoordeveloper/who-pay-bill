// const Stage2=()=>{
//     return(<>
//     Stage 2</>)
// }
// export default Stage2;

import { useContext } from "react";
import { MyContext } from "../Context";
import { Button } from "react-bootstrap";

export default function Stage_two(){
  const context = useContext(MyContext);

  return(<>
    <div className="result_wrapper">
      <h3>The Loser is:</h3>
      {context.result}
    
    </div>
    <div className="action_button"
    onClick={()=> context.resetGame()}> 
        Start over
    </div>
    <div className="action_button btn_2"
    onClick={()=>context.generateNewLoser()}>
        Get new Loser
    </div>
    </>
  )
}
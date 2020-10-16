import React from 'react';

function Question(props) {
    console.log(props);
  return (
    <div>
    
       {props.question.question}
       {
        props.question.type==='MCQ' && <div>
         <input type="radio" id="male" name="answer" value="male"></input>
         {props.question.options && props.question.options.op1}<br></br>

         <input type="radio" id="female" name="answer" value="female"></input>
         {props.question.options  && props.question.options.op2}<br></br>

          <input type="radio" id="other" name="answer" value="other"></input>
          {props.question.options  && props.question.options.op3}<br></br>
       </div>}
      {props.question.type==='Boolean' && <div>
         <input type="radio" id="male" name="answer" value="male"></input>
         True<br></br>

         <input type="radio" id="female" name="answer" value="female"></input>
         False<br></br>

        
       </div>
    }
    {props.question.type==='Text' && <div>
    <input type="text" id="male" name="answer"></input>
    
   
  </div>
}
    

    </div>
  );
}

export default Question;

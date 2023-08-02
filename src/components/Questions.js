import React from "react";

export default function Questions(props) {
    

    const quizElements = props.quizQuestions.map((item)=> (
        <div className="quiz-form"> 
            <div className="question">
                <h3>{item.question}</h3>
            </div>
            {item.ranNum===1 && 
                <div className="option-flex">
                    <div className="options" style={{backgroundColor: item.option1[1] === true ? "#59E391" : ""}} onClick={(() => props.clickAnswer(item.id, item.option1))}>{item.option1[0]}</div>
                    <div className="options" style={{backgroundColor: item.option2[1] === true ? "#59E391" : ""}} onClick={(() => props.clickAnswer(item.id, item.option2))}>{item.option2[0]}</div>
                    <div className="options" style={{backgroundColor: item.option3[1] === true ? "#59E391" : ""}} onClick={(() => props.clickAnswer(item.id, item.option3))}>{item.option3[0]}</div>
                    <div className="options" style={{backgroundColor: item.option4[1] === true ? "#59E391" : ""}} onClick={(() => props.clickAnswer(item.id, item.option4))}>{item.option4[0]}</div><br/>
                </div>
            }
            {item.ranNum===2 && 
                <div className="option-flex">
                    <div className="options" style={{backgroundColor: item.option2[1] === true ? "#59E391" : ""}} onClick={(() => props.clickAnswer(item.id, item.option2))}>{item.option2[0]}</div>
                    <div className="options" style={{backgroundColor: item.option1[1] === true ? "#59E391" : ""}} onClick={(() => props.clickAnswer(item.id, item.option1))}>{item.option1[0]}</div>
                    <div className="options" style={{backgroundColor: item.option3[1] === true ? "#59E391" : ""}} onClick={(() => props.clickAnswer(item.id, item.option3))}>{item.option3[0]}</div>
                    <div className="options" style={{backgroundColor: item.option4[1] === true ? "#59E391" : ""}} onClick={(() => props.clickAnswer(item.id, item.option4))}>{item.option4[0]}</div><br/>
                </div>
            }
            {item.ranNum===3 && 
                <div className="option-flex">
                    <div className="options" style={{backgroundColor: item.option2[1] === true ? "#59E391" : ""}} onClick={(() => props.clickAnswer(item.id, item.option2))}>{item.option2[0]}</div>
                    <div className="options" style={{backgroundColor: item.option3[1] === true ? "#59E391" : ""}} onClick={(() => props.clickAnswer(item.id, item.option3))}>{item.option3[0]}</div>
                    <div className="options" style={{backgroundColor: item.option1[1] === true ? "#59E391" : ""}} onClick={(() => props.clickAnswer(item.id, item.option1))}>{item.option1[0]}</div>
                    <div className="options" style={{backgroundColor: item.option4[1] === true ? "#59E391" : ""}} onClick={(() => props.clickAnswer(item.id, item.option4))}>{item.option4[0]}</div><br/>
                </div>
            }       
            {item.ranNum===4 && 
                <div className="option-flex">
                    <div className="options" style={{backgroundColor: item.option2[1] === true ? "#59E391" : ""}} onClick={(() => props.clickAnswer(item.id, item.option2))}>{item.option2[0]}</div>
                    <div className="options" style={{backgroundColor: item.option3[1] === true ? "#59E391" : ""}} onClick={(() => props.clickAnswer(item.id, item.option3))}>{item.option3[0]}</div>
                    <div className="options" style={{backgroundColor: item.option4[1] === true ? "#59E391" : ""}} onClick={(() => props.clickAnswer(item.id, item.option4))}>{item.option4[0]}</div>
                    <div className="options" style={{backgroundColor: item.option1[1] === true ? "#59E391" : ""}} onClick={(() => props.clickAnswer(item.id, item.option1))}>{item.option1[0]}</div><br/>
                </div>
            }
            <br/>
            <hr></hr>    
        </div>
    ))

    console.log(quizElements);
    
    return (
        <div className="quiz-quetion-option-container">
            {quizElements}
            <button className="check-answers" onClick={(()=>props.checkAnswers())}>Check Answers</button>
        </div>
    )
}
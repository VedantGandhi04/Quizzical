import React from "react";
import Quiz from "./components/Quiz";
import Questions from "./components/Questions";
import {nanoid} from "nanoid"
import NewGame from "./components/NewGame";

export default function App() {
    const [startQuiz, setStartQuiz] = React.useState(true)
    const [newGame, setNewGame] = React.useState(false)
    const [cat, setCat] = React.useState(false)
    const [data, setData] = React.useState(false);

    const [dataQuiz, setDataQuiz] = React.useState({
        category: "",
        difficulty: "",
    })
    const [score, setScore] = React.useState(0)
    
    const [quizQuestions, setQuizQuestions] = React.useState([{
        id: nanoid(),
        correctAnswer: "",
        question: "",
        option1: ["", false],
        option2: ["", false],
        option3: ["", false],
        option4: ["", false],
        ranNum: ""
    }])

   

    function handleClick() {
        setStartQuiz(false);
        setNewGame(false);
        setCat(true);
        setScore(0);
    }

    
    function handleStartClick() {
        setCat(false);
        setData(true);
    }
        
    function checkAnswers() {
        for (let i = 0; i < quizQuestions.length; i++) {
            const bool1 = quizQuestions[i].option1[1]
            if(bool1===true){
                setScore(data => data+1)
            }
        }
        setData(false);
        setNewGame(true);
    }
    
    function clickAnswer(id, option) {
        setQuizQuestions((prevQuizQuestions) => {
            return prevQuizQuestions.map((item) => {
                if(item.id === id){
                    if(item.option1[0] === option[0]){
                        item.option1[1] = !item.option1[1]
                    } else if(item.option2[0] === option[0]){
                        item.option2[1] = !item.option2[1]
                    } else if(item.option3[0] === option[0]){
                        item.option3[1] = !item.option3[1]
                    } else if(item.option4[0] === option[0]){
                        item.option4[1] = !item.option4[1]
                    }
                } 
                return { ...item };
            });
        });
    }

    function handleNewGame() {
        setNewGame(false);
        setStartQuiz(true);
    }
    
    function decodeHtmlEntities(text) {
        const doc = new DOMParser().parseFromString(text, 'text/html');
        return doc.documentElement.textContent;
    }

    React.useEffect(() => {
        async function getQuiz() {
            const res = await fetch(`https://opentdb.com/api.php?amount=5&category=${dataQuiz.category}&difficulty=${dataQuiz.difficulty}&type=multiple`)
            const data = await res.json()
            setQuizQuestions(data.results.map((item) => {
                
                return {
                    correctAnswer: item.correct_answer,
                    question: decodeHtmlEntities(item.question),
                    option1: [decodeHtmlEntities(item.correct_answer), false], 
                    option2: [decodeHtmlEntities(item.incorrect_answers[0]), false],
                    option3: [decodeHtmlEntities(item.incorrect_answers[1]), false],
                    option4: [decodeHtmlEntities(item.incorrect_answers[2]), false],
                    ranNum: Math.ceil(Math.random() * 4)                    
                } 
            }))
        }
        getQuiz()
    }, [data])

    return (
        <main>
            {startQuiz && !data && !newGame && !cat &&  
                <h1 className="title">Quizzical</h1>
            }
            {startQuiz && !data && !newGame && !cat &&  
                <p className="instructions">Description</p>
            }
            {startQuiz && !data && !newGame && !cat &&  
                <button className="start-quiz" onClick={handleClick}>Start Quiz</button>
            }
            {!startQuiz && !data && !newGame && cat && 
                <Quiz handleStartClick={handleStartClick} dataQuiz={dataQuiz} setDataQuiz={setDataQuiz}/>
            }
            {!startQuiz && data && !newGame && !cat && 
                <Questions key={quizQuestions.id} quizQuestions={quizQuestions} clickAnswer={clickAnswer} checkAnswers={checkAnswers}/>
            }
            {!startQuiz && !data && newGame && !cat && 
                <NewGame score={score} handleClick={handleNewGame}/>
            }
        </main>
    )
}
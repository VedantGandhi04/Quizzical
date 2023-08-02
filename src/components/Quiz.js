import React from "react"

export default function Quiz(props) {
    function handleChange(event) {
        const {name, value} = event.target
        props.setDataQuiz(prevDataQuiz => {
            return {
                ...prevDataQuiz,
                [name]: value  
            }
        })
    }

    return (
        <div className="quiz-container">
            <form onSubmit={props.handleStartClick}>
                <label className="quiz-category" htmlFor="category">Select Category</label>
                <select 
                    id="category"
                    value={props.dataQuiz.category}
                    name="category"
                    onChange={handleChange}
                    className="quiz-options"
                    required
                >
                    <option value="">-- Choose Category--</option>
                    <option value="9">General Knowledge</option>            
                    <option value="10">Entertainment: Books</option>            
                    <option value="11">Entertainment: Film</option>            
                    <option value="12">Entertainment: Music</option>            
                    <option value="13">Entertainment: Musicals & Theatres</option>            
                    <option value="14">Entertainment: Television</option>            
                    <option value="15">Entertainment: Video Games</option>           
                    <option value="16">Entertainment: Board Games</option>            
                    <option value="17">Science & Nature</option>            
                    <option value="18">Science: Computers</option>            
                    <option value="19">Science: Mathematics</option>            
                    <option value="20">Mythology</option>            
                    <option value="21">Sports</option>            
                    <option value="22">Geography</option>            
                    <option value="23">History</option>            
                    <option value="24">Politics</option>            
                    <option value="25">Art</option>            
                    <option value="26">Celebrities</option>            
                    <option value="27">Animals</option>            
                    <option value="28">Vehicles</option>            
                    <option value="29">Entertainment: Comics</option>            
                    <option value="30">Science: Gadgets</option>            
                    <option value="31">Entertainment: Japanese Anime & Manga</option>            
                    <option value="32">Entertainment: Cartoon & Animations</option>            
                </select>
                <br/>
                <br/>
                <label className="quiz-difficulty" htmlFor="difficulty">Select Difficulty</label>
                <select
                    id="difficulty"
                    value={props.dataQuiz.difficulty}
                    name="difficulty"
                    onChange={handleChange}
                    className="quiz-options"
                    required
                >
                    <option value="">--Choose Difficulty--</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">HArd</option>
                </select>
                <br />
                <br />
                <button className="start-quiz">Start</button>
            </form>
            {/* {quizQuestions} */}
        </div>
    )
}
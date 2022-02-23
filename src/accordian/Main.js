import React from 'react'
import questions from './data'
import Question from './Question'
const Main = () => {
    return (
        <section  style={{width:500,height:300}}>
            <div >
                <h4>Questions and Answers About Login</h4>
            </div>
            {questions.map((question) => <Question key={question.id} {...question} />)}
        </section>
    )
}

export default Main

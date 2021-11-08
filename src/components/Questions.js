import React from 'react'

function Questions({ questions_answers , register }) {
    return (
        <div className="card">
            <div className="card-body">

                {questions_answers.map((question) => {
                    return (
                        <div className="row mb-4" key={question.id}>
                            <div className="col-12"><h5>{question.text}</h5></div>
                            {question.answers.map((answer) => {
                                return (
                                    <div className="col" key={answer.id}>
                                        <input type='radio' {...register(question.id.toString())} />
                                        {answer.text}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Questions

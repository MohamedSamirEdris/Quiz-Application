import React from 'react'

function Questions({ questions_answers }) {
    return (
        <div className="card">
            <div className="card-body">

                {questions_answers.map((question) => {
                    return (
                        <div className="row mb-4">
                            <div className="col-12"><h5>{question.text}</h5></div>
                            {question.answers.map((answer)=>{
                                return (
                                    <div className="col">{answer.text}</div>
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

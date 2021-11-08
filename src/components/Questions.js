import React from 'react'

function Questions({ questions_answers, register }) {
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
                                        <div className="form-check">
                                            <input className="form-check-input" type='radio' {...register(question.id.toString())} />
                                            <label className="form-check-label" >
                                                {answer.text}
                                            </label>
                                        </div>

                                    </div>
                                )
                            })}
                            <div className="col-12"><hr/></div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Questions

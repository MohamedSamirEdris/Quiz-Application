import React from 'react'

function Result({ data: { questions_answers } }) {
    const correctCount = questions_answers.filter((x) =>{
       const answer =  x.answers.find(n => n.id == x.answer_id)
       return answer.is_true;
    })
    return (
        <div className="card mt-4">
            <div className="card-body">
                You'have got { correctCount.length} out of {questions_answers.length}
            </div>
        </div>
    )
}

export default Result

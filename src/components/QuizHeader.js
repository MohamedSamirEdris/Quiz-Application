import React from 'react'

function QuizHeader({data:{title , description , url , score}}) {

    return (
        <div className="card mt-5"  >
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <p className="card-text">{description}</p>
                <a href={url} className="card-link">Quiz Video</a>
            </div>
        </div>
    )
}

export default QuizHeader

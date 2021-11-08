import React,{useState} from 'react'
import QuizHeader from './QuizHeader'
import Data from '../Data'
import Questions from './Questions'

function Quiz() {
    const [data, setData] = useState(Data)

    return (
      <div>
          <QuizHeader data={data}/>
          <Questions questions_answers={data.questions_answers}/>
      </div>
    )
}

export default Quiz

import React,{useState} from 'react'
import QuizHeader from './QuizHeader'
import Data from '../Data'
import Questions from './Questions'
import { useForm } from "react-hook-form";


function Quiz() {
    const [data, setData] = useState(Data)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <QuizHeader data={data}/>
          <Questions questions_answers={data.questions_answers} register={register}/>
      </form>
    )
}

export default Quiz

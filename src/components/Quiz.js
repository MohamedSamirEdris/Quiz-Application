import React, { useState } from 'react'
import QuizHeader from './QuizHeader'
import Data from '../Data'
import Questions from './Questions'
import { useForm } from "react-hook-form";
import Result  from './Result';


function Quiz() {
    const [data, setData] = useState(Data)

    const { register, handleSubmit, watch, formState: { errors , isSubmitted} } = useForm();
    const onSubmit = (formData) => {
        let questions = [];
        //*/ Key represent question.is
        Object.keys(formData).map((key)=>{
            const answerId = formData[key]
            const questionId = key
            let answerQuestion = data.questions_answers.find(x => x.id == questionId);
            answerQuestion.answer_id = answerId;
            questions.push(answerQuestion);
            console.log(data);
        })
        setData(prevState => {
            return {
                ...prevState , questions_answers: questions 
            }
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <QuizHeader data={data} />
            <Questions questions_answers={data.questions_answers} register={register} />
            {isSubmitted  && <Result data={data} />}
            
            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary btn-lg mt-5">Submit</button>
            </div>
        </form>
    )
}

export default Quiz

import React from 'react'
import { useLocation , useNavigate } from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
import {useSelector} from 'react-redux'
import ReactPlayer from "react-player/youtube"
const HomeMainbar = () => {

  const location = useLocation()
  const user = 1
  const navigate = useNavigate()

  const questionList = useSelector(state => state.questionsReducer)
  //console.log(questionList)

// var questionList = [{
//   _id:1,
//   upVotes: 3,
//   downVotes: 2,
//   noOfAnswers :2,
//   questionTitle:"What is a function?",
//   questionBody:"It meant to be",
//   questionTags:["java","node.js","reactjs","mongodb"],
//   userPosted:"vishu",
//   userId:1,
//   askedOn:"jan 1",
//   answer:[{
//     answerBody:"Answer",
//     userAnswered:'kumar',
//     answerOn:"jan 2",
//     userId:2,
//   }]
// },
// {
//   _id:2,
//   upVotes:3,
//   downVotes: 3,
//   noOfAnswers :0,
//   questionTitle:"What is a function?",
//   questionBody:"It meant to be",
//   questionTags:["javascript","R","python"],
//   userPosted:"shalu",
//   userId:1,
//   askedOn:"jan 1",
//   answer:[{
//     answerBody:"Answer",
//     userAnswered:'kumar',
//     answerOn:"jan 2",
//     userId:2,
//   }]
// },{
//   _id:3,
//   upVotes: 1,
//   downVotes: 2,
//   noOfAnswers :0,
//   questionTitle:"What is a function?",
//   questionBody:"It meant to be",
//   questionTags:["Javascript","R","python"],
//   userPosted:"pragya",
//   userId:1,
//   askedOn:"jan 1",
//   answer:[{
//     answerBody:"Answer",
//     userAnswered:'kumar',
//     answerOn:"jan 2",
//     userId:2,
//   }]
// }]

  const checkAuth =()=>{
    if(user === null){
      alert("login or signup to ask a question")
      navigate('/Auth')
  }else{
    navigate('/AskQuestion')
  }
}


  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/'? <h1>Top Questions</h1> : <h1> All Questions</h1>
        }
      <button onClick={checkAuth} className='ask-btn'>Ask Questions</button> 
    </div>
    <div> 
      {
      questionList.data === null ?
      <h1>Loading...</h1> :
      <>
      <p>{ questionList.data.length } questions</p>
      <QuestionList questionsList = {questionList.data}/>
      </>
      

      }

    </div>
    <div>
        <h1>Video</h1>
        <ReactPlayer url="https://www.youtube.com/watch?v=uMQnn8xU7qs" playing={false} controls={true} width={500} height={200}/>
      </div>

    </div>
    
  )
}

export default HomeMainbar

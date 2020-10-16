import React from 'react';
import Question from './Question';
import { BrowserRouter, Route, Switch, history } from 'react-router-dom';

class QuestionsConatiner extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        questions: '',
        questionBank: [], 
        counter:1,
        score: 0, 
        currentQuestion :0,
        responses: 0 
      }
    }
    componentDidMount(){
        fetch('http://localhost:4000/api/questions').then((res) =>res.json())
        .then((data) =>{
            console.log(data);
            this.setState({questions:data})
        })
    
    }

    // Set state back to default and call function 
  playAgain = () => { 
    this.getQuestions(); 
    this.setState({score: 0, responses: 0}); 
  }; 

   // Function to compute scores 
   computeAnswer = (answer, correctAns) => { 
    if (answer === correctAns) { 
      this.setState({ 
        score: this.state.score + 1 
      }); 
    } 
    this.setState({ 
      responses: this.state.responses < 5 
        ? this.state.responses + 1 
        : 5 
    }); 
  }; 

  loadSummary =() =>{
     this.props.history.push('/SummaryPage')
  }
  loadNextQuestion = () =>{
    this.setState({
      currentQuestion:this.state.currentQuestion+1
    });
  }

  checkButton =() =>{
    return this.state.currentQuestion+1 != this.state.questions.length
  }

    render() {
      return(
        <div>
          <h1>Quiz App</h1>
          Question 
    <span>{this.state.currentQuestion+1}</span> of <span>{this.state.questions.length}
    </span>
        {
          this.state.questions && 
         <Question key = {this.state.questions[this.state.currentQuestion].id} 
         question ={this.state.questions[this.state.currentQuestion]}></Question>
        }
        {this.state.questions && this.checkButton() ? <button onClick ={this.loadNextQuestion}>Next</button>:
        <button onClick ={this.loadSummary}>Submit</button>
        }
        
        </div>
        
      );
    }
  }


 export default QuestionsConatiner;
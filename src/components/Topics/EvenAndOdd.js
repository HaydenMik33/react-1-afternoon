import React,{Component} from "react";

class EvenAndOdd extends Component{
    constructor(props){
        super(props);
        this.state={
            evenArr:[],
            oddArr:[],
            userInput :"",
        }
    }
   
    evenOrOdds(){
       const even=[];
       const odds=[];
       var arr= this.state.userInput.split(",");
       for(var i=0 ; i<arr.length; i++){
       if(arr[i]%2===0){
           even.push(arr[i],",");
       }
       else if(arr[i]%2 ===1) {odds.push(arr[i],",")}
    }
    even.pop()
    odds.pop()
    this.setState({evenArr : even});
    this.setState({oddArr: odds});
    }
    
    render(){
        console.log(this.state.userInput)   
        console.log(this.state.evenArr)
        console.log(this.state.oddArr)
        return(
            <div className="puzzleBox evenAndOddPB">
            <h4>"Evens and Odds"</h4>
               <input className="inputLine" onChange={
                   e=> this.setState({userInput : e.target.value})
                } placeholder="Type any number"/>
               <button className="confirmationButton" onClick={
                   ()=> this.evenOrOdds()
               }
               >
               seperate!
               </button> 
               <span className="resultsBox">Even : [{this.state.evenArr}]</span> 
               <span className="resultsBox">Odds : [{this.state.oddArr}]</span> 
            </div>

        )
    }
}


export default EvenAndOdd;

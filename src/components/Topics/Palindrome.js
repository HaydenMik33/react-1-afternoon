import React,{Component} from "react";
 

class Palindrome extends Component{
  
    constructor(props){
        super(props);
        this.state={
           palindrome:"",
           userInput :"",
        }
    }
    
    check(){
      var arr = this.state.userInput.split("");
      var empty =[];
      for(var i=arr.length-1; i>-1; i--){
          empty.push(arr[i]);
      }
      if(empty.toString() == arr.toString()){
        this.setState({palindrome:"true"})
      }
      else{ this.setState({palindrome:"false"})}
    }
    render(){
        console.log(this.state.userInput);
    return( 
      <div className="puzzleBox filterStringPB">
      <h4>Palindrome</h4>
      <input className="inputLine" onChange ={
            (e)=> this.setState({userInput :e.target.value})
        }
        />
        <button className="confirmationButton" onClick ={
             ()=>this.check()
        }
            >Check!</button> 
        <span className="resultsBox">{this.state.palindrome}</span> 
      </div>
    )
}
}



export default Palindrome;

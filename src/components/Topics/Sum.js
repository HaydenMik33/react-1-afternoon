import React,{Component} from "react";
 

class Sum extends Component{
    constructor(props){
        super(props);
        this.state={
           num1:0,
           num2 :0,
           sum:null
        }
    }
    
    add(){
      var result;
      result = Number(this.state.num1)+Number(this.state.num2);
      this.setState({sum:result});
    }    
    render(){
        console.log(this.state.num1);
    return( 
      <div className="puzzleBox sumPB">
      <h4>Sum</h4>
      <input className="inputLine" onChange ={
            (e)=> this.setState({num1 :e.target.value})
        }
        />
        <input className="inputLine" onChange ={
            (e)=> this.setState({num2 :e.target.value})
        }
        />
        <button className="confirmationButton" onClick ={
             ()=>this.add()
        }
            >Add!</button> 
        <span className="resultsBox">{this.state.sum}</span> 
      </div>
    )
}
}




export default Sum;

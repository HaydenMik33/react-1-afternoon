import React,{Component} from "react";



class FilterString extends Component{
constructor(props){
    super(props);
    this.state={
       unfilteredArr: ["Hayden","Jacob","Desty","Talia","Alexander","James","Austin"],
       userInput :"",
       filteredArr:[]
    }
}

makeFilteredStr(){
    var output = [];
  var arr = this.state.unfilteredArr;
  for(var i =0; i<arr.length; i++){
      if(arr[i].indexOf(this.state.userInput)!==-1){
          output.push(arr[i]);
      }
  }
  this.setState({filteredArr:output})
}
render(){
    console.log(this.state.userInput);
return( 
  <div className="puzzleBox filterStringPB">
  <h4>Filter String</h4>
    <span className="puzzleText">Names:{JSON.stringify(this.state.unfilteredArr,null,3)}</span>
    <input className="inputLine" onChange ={
        (e)=> this.setState({userInput :e.target.value})
    }
    />
    <button className="confirmationButton" onClick ={
         ()=>this.makeFilteredStr()
    }
        >filter!</button> 
    <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArr,null,3)}</span> 
  </div>
)
}
}



export default FilterString;

import React,{Component} from "react";
 

class FilterObject extends Component{
  constructor(props){
      super(props);
      this.state={
         unfilteredArray :[{name:"Hayden",age:21,eyecolor:"Brown",favorite:"dancing"},{name:"Talia",age:25,hired: false},{name:"Xander",age:18,favorite:"fishing"}],
         userInput:"",
         filteredArray :[]
      };
  }

  makeFilteredArr(){
      var output= [];
      var arr= this.state.unfilteredArray;
      for(var i=0; i<arr.length; i++){
         for(var key in arr[i]){
             if(key === this.state.userInput){
               output.push(arr[i]);
             }
         }
      }
      this.setState({filteredArray:output})
      console.log(output);
  }
  
  render(){
      console.log(this.state.userInput);
      return(
           <div className="puzzleBox filterObjectPB">
           <h4>"Filter Object"</h4>
            
            <span className="puzzleText">original :{JSON.stringify(this.state.unfilteredArray, null,3) }</span> 
            <input className="inputLine" onChange={ (e) =>
                this.setState({userInput: e.target.value})
                } />
            <button className="confirmationButton" onClick={
                ()=>this.makeFilteredArr()
            }
            >filter!</button> 
            <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray, null,3)}</span> 

            </div>
             
        )
    }
}



export default FilterObject;

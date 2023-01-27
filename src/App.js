import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  var [classShow, setClassShow] = useState(true);
  return (
    <div className="container">
        <h1>Hello World!</h1>
        <FuncComp initNumber={123}></FuncComp>
        {classShow ? 
        <ClassComp initNumber={2}></ClassComp> : null }

        <input type="button" value="remove Class"
          onClick={
            function(){
              setClassShow(false)
            }
          }
          ></input>
        
        </div>
  );
}
var funcStyle = 'color:white;background:tomato'; // class방식과 구분
var funcId = 0;

function FuncComp(props) {
  var numberState = useState(props.initNumber);
  var number = numberState[0];
  var setNumber = numberState[1];

  // var dateState = useState((new Date()).toString());
  // var _date = dateState[0];
  // var setDate = numberState[1];

  var [_date, setDate] = useState((new Date()).toString());
  console.log('numberState', numberState);

  useEffect(function() {
    console.log('%cfunc => useEffect 실행 '+(++funcId), funcStyle);
  });

  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {_date}</p>
          <input type="button" value="random" onClick={
            function(){
              setNumber(Math.random());
            }
          }></input>
          <input type="button" value="Date" onClick={
            function(){
              setDate((new Date()).toString());
            }
          }></input>
    </div>
  );
}
var classStyle = 'color:red';
class ClassComp extends React.Component{
  state = {
    number : this.props.initNumber,
    date : (new Date()).toString()
  }
  componentWillMount(){
    console.log('%cclass => componentWillMount', classStyle )
  }
  componentDidMount(){
    console.log('%cclass => componentDidMount', classStyle )
  }

  // state 값 변경 시 render() 실행 여부 결정
  // true : 실행, false : 실행 안 함
  shouldComponentUpdate(nextProps, nextState) {
    console.log('%cclass => this.shouldComponentUpdate 실행',classStyle);
    return true;
  }
  render(){
    console.log('%cclass => componentWillMount, componentWillUpdate', classStyle )
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input type="button" value="random" onClick={
          function(){
            this.setState({number:Math.random()});
          }.bind(this)
        }></input>
        <input type="button" value="date" onClick={
          function(){
            this.setState({date:(new Date().toString)});
          }
        }></input>
      </div>
    )
  }
}
export default App;

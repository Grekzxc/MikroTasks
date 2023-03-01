import React, { useState } from 'react';
import './App.css';
import { Header } from './site/Header';
import { Body } from './site/Body';
import { Footer } from './site/Footer';
import { NewComponent } from './map/NewComponent';


function App() {
return(
  <div className='App'>
    <button>MyYouTubeChanel_1</button>
    <button>MyYouTubeChanel_2</button>
  </div>
)
}

export default App;


// 1Е ЗАНЯТИЕ components/props

{/* <Header titleForHeader={'New Header'} />
<Body titleForBody={'New Body'}/>
<Footer titleForFooter={'New Footer'}  />
<NewComponent students={[]} />  передали компоненту, у которой свойство students которая принимает массив, фиг знает как обьяснить кароче)) */}


// 2Е ЗАНЯТИЕ MAP

// const [students, setStudents] = useState([
//   {id: 1, name: "James", age: 8},
//   {id: 2, name: "Robert", age: 18},
//   {id: 3, name: "John", age: 28},
//   {id: 4, name: "Michael", age: 38},
//   {id: 5, name: "William", age: 48},
//   {id: 6, name: "David", age: 58},
//   {id: 7, name: "Richard", age: 68},
//   {id: 8, name: "Joseph", age: 78},
//   {id: 9, name: "Thomas", age: 88},
//   {id: 10, name: "Charles", age: 98},
//   {id: 11, name: "Christopher", age: 100},
// ]
// )
// return (
// <NewComponent students={students}/>
// );


// TРЕТЬЕ ЗАНЯТИЕ BUTTON


// const myFirstSubscriber1 = (event:React.MouseEvent<HTMLButtonElement>) =>{
  //   console.log('hello, I am Alex')
  // }
  // const myFirstSubscriber2 = (event:React.MouseEvent<HTMLButtonElement>) =>{
  //   console.log('hello, I am Ivan')
  // }
      {/* <button onClick={(event)=>{console.log('hello')}}>MyYouTubeChanel_1</button>
    <button onClick={(event:React.MouseEvent<HTMLButtonElement>) => onClickHandler}>MyYouTubeChanel_2</button> */} //



                // 2 способа как делать кнопку, в onClick или мы ставим 2е скобок и в начале и в конце, либо вообще не ставим onClick={ ()=>...() }
 // const foo1 =()=>{
  //   return(console.log(100200))
  // }
  // const foo2 =(num: number)=>{
  //   console.log(num);
  // }
    {/* <button onClick={foo1}>1</button> */}
  {/* <button onClick={()=> foo2(100200)}>2</button> */}

  // function App() {
  //   const onClickHandler = (name: string) =>{
  //     console.log(name)
  //   }
  // return(
  //   <div className='App'>
  
  //     <button onClick={() => onClickHandler ('vasya')}>MyYouTubeChanel_1</button>
  //     <button onClick={() => onClickHandler ('ivan')}>MyYouTubeChanel_2</button>
  //   </div>
  // )
  // }

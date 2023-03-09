import React, { useState } from 'react';
import './App.css';
import { Header } from './site/Header';
import { Body } from './site/Body';
import { Footer } from './site/Footer';
import { NewComponent } from './map/NewComponent';
import { Button } from './components/button';
import { FullInput } from './components/FullInput';
import { Button5 } from './components/button5';
import { Input } from './components/input';



function App() {
  let [message, setMessage] = useState([
    {message: 'message1'},
    {message: 'message2'},
    {message: 'message3'}
  ])

  const addMessage = (title: string)=>{
let newMessage = {message: title}
setMessage([newMessage, ...message ])
  }

  return(
    <div>
      {/* <FullInput addMessage={addMessage}/> */}

      <Input />
      <Button5 />
    

      {message.map((el, index)=>{
        return(
        <div key={index}>{el.message}</div>
        )
      })}
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



  // const Button1Foo=(subscriber: string, age: number)=>{
  //   console.log(subscriber, age);
    
  // }
  // const Button2Foo=(subscriber: string)=>{
  //   console.log(subscriber);
  // }
  // const Button3Foo=()=>{
  //   console.log('I am stypid button');
    
  // }
  
  // return(
  //   <div className='App'>
  //     <Button name={'MyYouTubeChanel_1'} callBack={()=>Button1Foo('i`m vasiliy', 21)}/>
  //     <Button name={'MyYouTubeChanel_2'} callBack={()=>Button2Foo('i`m karuto')}/>
  //     <Button name={'MyYouTubeChanel_3'} callBack={Button3Foo}/>
  //   </div>
  // )
  // }


                            //4 урок UseState


  // function App() {
  //   let [a, setA] = useState(1)
  //   let onClickHandler = () =>{
  //     setA(++a)
  //     console.log(a);
  //   }
  //   let onClickZero = () => {
  //     setA(a = 0)
  //   }
  //     return(
  //       <div>
  //       <h1> {a} </h1>
  //       <button onClick={onClickHandler}>number</button>
  //       <button onClick={onClickZero}>0</button>
  //       </div>
  //     )
  //     }
  //   export default App;



              // 5 lessons

              // type FilterType = 'all' | 'RUBLS' | 'Dollars'

            //   const [money, setMoney] = useState([
            //     { banknots: 'Dollars', value: 100, number: ' a1234567890' },
            //     { banknots: 'Dollars', value: 50, number: ' z1234567890' },
            //     { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
            //     { banknots: 'Dollars', value: 100, number: ' e1234567890' },
            //     { banknots: 'Dollars', value: 50, number: ' c1234567890' },
            //     { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
            //     { banknots: 'Dollars', value: 50, number: ' x1234567890' },
            //     { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
            //   ]) 
            
            // const [filter, setFilter]=useState<FilterType>('all')
            
            //   let currentMoney = money
            //   if(filter === 'RUBLS'){
            //   currentMoney = money.filter((filteredMoney)=>filteredMoney.banknots === 'RUBLS')
            //   }
            //   if(filter === 'Dollars'){
            //   currentMoney = money.filter((filteredMoney)=>filteredMoney.banknots === 'Dollars')
            //   }
            
            //  const onClickFilterHandler = (nameButton: FilterType) =>{
            //     setFilter(nameButton);
            //   }
            //   return(
            //   <>
            //   <ul>
            // {currentMoney.map((objFromMoneyArr, index: number)=>{
            //   return(
            //     <li key={index}>
            //       <span> {objFromMoneyArr.banknots} </span>
            //       <span> {objFromMoneyArr.value} </span>
            //       <span> {objFromMoneyArr.number} </span>
            //     </li>)
            // })}
            // </ul>
            // <div style={{marginLeft: '25px'}}>
            // <button onClick={()=>onClickFilterHandler('all')}>all</button>
            // <button onClick={()=>onClickFilterHandler('RUBLS')}>RUBLS</button>
            // <button onClick={()=>onClickFilterHandler('Dollars')}>Dollars</button>
            // </div>
            // </>
            // )
              // return(
              //   <>
              //   {/* <ComponentButton/> */}
              //   </>
              // )
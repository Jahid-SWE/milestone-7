
import Actor from './Actor'
import './App.css'
import Library from './Library'
import Singer from './Singer'
import ToDo from './ToDo'

function App() {
 const actors= ['bapparaj', 'polash','hasnat', 'kamal']
 const singers=[
  {id:1, name: 'jahid', age: 25},
  {id:2, name: 'kakal', age: 30},
  {id:3, name: 'munit', age: 50},
 ]

 const books=[
  {id:1, name:'Bangla', price: 251 , writer:'jahid'},
  {id:2, name:'English', price: 980 , writer:'kamal'},
  {id:3, name:'Math', price: 1500 , writer:'Ab Hakim'},
  {id:4, name:'Islam', price: 80 , writer:'lalu'},
  {id:5, name:'History', price: 800 , writer:'ALmun'},
  {id:6, name:'Biology', price: 900 , writer:'kudus'},
 ]

  return (
    <>
    <Library books={books}></Library>

    {
      singers.map(singer=><Singer key={singer.id} singer={singer}></Singer>)
    }
      {
        actors.map((actor,index)=><Actor key={index} actor={actor}></Actor>)
      }

      {/* <h1>this is app section </h1>
      <ToDo task='Learn with React' isDone={true}></ToDo>
      <ToDo task='Learn with Vuejs' isDone={true}></ToDo>
      <ToDo task='Learn with Next.js' isDone={false}></ToDo> */}
      {/* <h1>Vite + React</h1>
      <Person></Person>
      <Teacher></Teacher>
      <Developer name='jahid' tech='fontend '></Developer>
      <Developer name='Hassan' tech='developer'></Developer>
      <Player name='Tamim' runs='5000'></Player>
      <Player name='Sakib' runs='7000'></Player> */}
      
    </>
  )
}

// function Person(){
//   return(
//     <p>I am a person</p>
//   )
// }
// function Teacher(){
//   return(
//     <div className='student'>
//       <h1>He is Brlieant teacher</h1>
//       <h1>I love Her</h1>
//     </div>
//   )
// }

// function Developer(props){
//   console.log(props)
//   return(
//     <div>
//       <h4>Developer : {name} </h4>
//       <h5>Tech :</h5>
//     </div>
//   )
// }

// function Player({name, runs}){
//   return(
//     <div>
//       <h1 >{name} Got {runs} runs</h1>
//     </div>
//   )
// }

export default App

import Example from "./components/Example"
import Sample from "./Sample"

const App = () => {
  // let name = "John Doe"
  // let age = 27
  // let message = "Welcome to React"
  let person = {
    name : "John Doe",
    age : 27,
    message : "Welcome to React"
  }

  function handileClick() {
    console.log("Button Clicked")
  }

  let arr = [1,2,3,4,5];
  
  
  return (
    <>
      
      {/* <Sample name = {name} age={60} message = {message} /> */}
      <Sample person = {person} handileClick={handileClick} arr={arr}/>
    </>
  )
}

export default App

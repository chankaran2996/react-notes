import { BrowserRouter, Route, Routes } from "react-router-dom"
import Count from "./components/Count"
import Example from "./components/Example"
import LoginPage from "./pages/LoginPage"
import Sample from "./Sample"
import PageNotFound from "./components/PageNotFound"

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
    <BrowserRouter>
      
      {/* <Sample name = {name} age={60} message = {message} /> */}
      {/* <Sample person = {person} handileClick={handileClick} arr={arr}/> */}
      {/* <Count /> */}
      {/* <Sample /> */}
      {/* <LoginPage /> */}
      <Routes>
        <Route path="/login" element= {<LoginPage/>} />
        <Route path="/" element = {<Count/>} />
        <Route path="/sample" element = {<Sample/>} />
        <Route path="*" element={<PageNotFound/>} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

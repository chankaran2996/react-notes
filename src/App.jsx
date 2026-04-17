import Example from "./components/Example"
import Sample from "./Sample"

const App = () => {
  let name = "John Doe"
  let age = 27
  let message = "Welcome to React"
  
  return (
    <>
      
      <Sample name = {name} age={60} message = {message} />
    </>
  )
}

export default App

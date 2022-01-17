import RegisterForm from "./components/Register";
import LoginForm from "./components/Login";

import Navbar from "./components/Navbar";
function App() {


  
  return (
    <div className="App">
      {/* rendering components */}
      <Navbar />
      <RegisterForm />
      <LoginForm />
    </div>
  );
}

export default App;

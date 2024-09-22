import "./App.css";
import Stepper from "./components/Stepper";


function App() {
  const steps = [
    {
      label:"Personal Info",
      content : <div>Personal Information</div>
    },
    {
      label:"Account Info",
      content : <div>Account Information</div>
    },
    {
      label:"Payment",
      content : <div>Payment Information</div>
    },
    {
      label:" Confirmation",
      content : <div>Conformation Information</div>
    },
    {
      label:" Review",
      content : <div>Review Information</div>
    },
  ]
 
  return (
    <>

    <Stepper  steps={steps} />

    </>
  );
}

export default App;

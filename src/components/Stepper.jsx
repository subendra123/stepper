import React, {useState} from 'react'

const Stepper = ({steps}) => {
    const [currentStep, setCurrentStep] = useState(0);
    console.log(currentStep);

    const handleContinue = () => {
        if(currentStep < steps.length -1) setCurrentStep(currentStep + 1)
        
    }

    const handleBack = () => {
        if(currentStep > 0) {
            setCurrentStep(currentStep -1);
        }

    }


  return (
   <>
   <div className="stepper">
    <div className="">
    {
        steps.map(({label, content}, index) => {
            return(
                <>
                <div key={label} className="stepper_contener">
                    <div className={`step_number ${index <= currentStep ? "active" : ""} `}>
                        {index + 1}
                        {index < steps.length -1 &&  <div className={ `step_line ${index < currentStep ? "active" : ""}`}></div>}
                    
                   
                    </div>
                    <div className="step_label">{label}</div> 
                </div>
                
                </>
            )
        })
    }
    </div>
    

    <div className="stepper-content">{steps[currentStep].content}</div>

    <div className="stepper_controls">
        <button className='backbutton' onClick={handleBack}>Back</button>
        <button className='nextbutton' onClick={handleContinue}>Continue</button>
    </div>
   </div>
   </>
  )
}

export default Stepper
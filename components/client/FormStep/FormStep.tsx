import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { useMultistepFormContext } from "@/hooks/use-multistep-form";

const steps = [
  {
    step: 1,
    component: Step1,
  },
  {
    step: 2,
    component: Step2,
  },
  {
    step: 3,
    component: Step3,
  },
  {
    step: 4,
    component: Step4,
  },
];

export default function FormStep() {
  const { currentStep } = useMultistepFormContext();

  const step = steps.find(({ step }) => step === currentStep);

  // We need a method to update our formData
  // function handleChangeInput(event) {
  //   const fieldName = event.target.name;
  //   let fieldValue;
  //   if (fieldName === 'agreeToTerms') {
  //     fieldValue = event.target.checked;
  //   } else {
  //     fieldValue = event.target.value;
  //   }
  //   setFormData({
  //     ...formData,
  //     [fieldName]: fieldValue,
  //   });
  // }

  return (
    <div className="w-2/5 flex flex-col items-center justify-center gap-5">
      {step && step.component()}
      {/* {step === stepA ? ( */}
      {/*   <StepA formData={form} handleNextStep={handleNextStep} /> */}
      {/* ) : null} */}
      {/* {step === stepB ? ( */}
      {/*   <StepB */}
      {/*     formData={form} */}
      {/*     handleNextStep={handleNextStep} */}
      {/*     handlePrevStep={handlePrevStep} */}
      {/*   /> */}
      {/* ) : null} */}
      {/* {step === stepC ? ( */}
      {/*   <StepC */}
      {/*     formData={form} */}
      {/*     handleNextStep={handleNextStep} */}
      {/*     handlePrevStep={handlePrevStep} */}
      {/*   /> */}
      {/* ) : null} */}
      {/* {step === "Final" ? <StepFinal /> : null} */}
    </div>
  );
}
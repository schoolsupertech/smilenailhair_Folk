import { useMultistepFormContext } from "@/hooks/use-multistep-form";
import Step from "./Step";

export default function Stepper() {
  const { currentStep, steps } = useMultistepFormContext();

  return (
    <ol className="flex items-center w-1/2 text-sm font-medium text-center text-base">
      {steps.map((step, index, stepsLength) => (
        <Step
          key={step.number}
          step={step}
          isActive={step.number === currentStep}
          isLastStep={index === stepsLength.length - 1}
        />
      ))}
    </ol>
  );
}

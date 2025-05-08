import { useState } from "react";
import AcademicForm from "./components/AcademicForm";
import InterestForm from "./components/InterestForm";
import LandingPage from "./components/LandingPage";
import RIASECForm from "./components/RIASECForm";
import ResultPage from "./components/ResultPage";

export default function App() {
  const [step, setStep] = useState(1);
  const [studentData, setStudentData] = useState({});
  const [academicData, setAcademicData] = useState({});
  const [interestData, setInterestData] = useState({});
  const [riasecData, setRiasecData] = useState({});

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover"
      style={{ backgroundImage: "url(/public/assets/bg.svg)" }}
    >
      {step === 1 && <LandingPage onStart={() => setStep(2)} />}
      {step === 2 && (
        <AcademicForm
          onNext={(data) => {
            setAcademicData(data);
            setStep(3);
            console.log("Academic Data:", data);
          }}
        />
      )}
      {step === 3 && (
        <InterestForm
          onBack={() => setStep(2)}
          onNext={(data) => {
            setInterestData(data);
            setStep(4);
            console.log("Interest Data:", data);
          }}
        />
      )}
      {step === 4 && (
        <RIASECForm
          onBack={() => setStep(3)}
          onNext={(data) => {
            setRiasecData(data);
            setStep(5);
            console.log("RIASEC:", data);
          }}
        />
      )}
      {step === 5 && <ResultPage onBack={() => setStep(1)} />}
    </div>
  );
}

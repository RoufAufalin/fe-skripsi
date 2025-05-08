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
      style={{ backgroundImage: "url(/assets/bg.svg)" }}
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
            console.log("Academic Data:", academicData);
          }}
        />
      )}
      {step === 4 && (
        <RIASECForm
          onBack={() => setStep(3)}
          onNext={async (data) => {
            setRiasecData(data);
            console.log("RIASEC:", data);

            // Gabungkan semua data jadi satu objek
            const finalData = {
              akademik: Object.values(academicData).map(Number),
              keminatan: Object.values(interestData).map(Number),
              riasec: Object.values(data).map(Number),
            };

            console.log("Data to send:", finalData);

            try {
              const response = await fetch(
                "https://be-skripsi-production-fcd7.up.railway.app/recommend/",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(finalData),
                }
              );

              const result = await response.json();
              console.log("API response:", result);

              setStudentData(result); // Jika ingin simpan hasil response
              setStep(5); // Tampilkan result page
            } catch (error) {
              console.error("API error:", error);
              alert("Terjadi kesalahan saat mengirim data.");
            }
          }}
        />
      )}
      {step === 5 && (
        <ResultPage onBack={() => setStep(1)} result={studentData} />
      )}
    </div>
  );
}

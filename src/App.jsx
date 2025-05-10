import { useState } from "react";
import AcademicForm from "./components/AcademicForm";
import InterestForm from "./components/InterestForm";
import LandingPage from "./components/LandingPage";
import RIASECForm from "./components/RIASECForm";
import ResultPage from "./components/ResultPage";
import ProfileForm from "./components/ProfilePage";

export default function App() {
  const [step, setStep] = useState(1);
  const [profileData, setProfileData] = useState({});
  const [studentData, setStudentData] = useState({});
  const [academicData, setAcademicData] = useState({});
  const [interestData, setInterestData] = useState({});
  const [riasecData, setRiasecData] = useState({});

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover px-4 sm:px-6"
      style={{ backgroundImage: "url(/assets/bg.svg)" }}
    >
      <div className="w-full max-w-md">
        {step === 1 && <LandingPage onStart={() => setStep(2)} />}
        {step === 2 && (
          <ProfileForm
            onNext={(data) => {
              setProfileData(data);
              setStep(3);
              console.log("Profile Data:", data);
            }}
          />
        )}
        {step === 3 && (
          <AcademicForm
            onNext={(data) => {
              setAcademicData(data);
              setStep(4);
              console.log("Academic Data:", data);
            }}
          />
        )}
        {step === 4 && (
          <InterestForm
            onBack={() => setStep(3)}
            onNext={(data) => {
              setInterestData(data);
              setStep(5);
              console.log("Interest Data:", data);
              console.log("Academic Data:", academicData);
            }}
          />
        )}
        {step === 5 && (
          <RIASECForm
            onBack={() => setStep(4)}
            onNext={async (data) => {
              setRiasecData(data);
              console.log("RIASEC:", data);

              // Gabungkan semua data jadi satu objek
              const finalData = {
                profile: Object.values(profileData),
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
                setStep(6); // Tampilkan result page
              } catch (error) {
                console.error("API error:", error);
                alert("Terjadi kesalahan saat mengirim data.");
              }
            }}
          />
        )}
        {step === 6 && (
          <ResultPage onBack={() => setStep(1)} result={studentData} />
        )}
      </div>
    </div>
  );
}

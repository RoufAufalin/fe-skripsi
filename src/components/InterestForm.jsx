import { useState } from "react";

const interests = [
  "Minat Sains",
  "Minat Sosial",
  "Minat Bahasa",
  "Minat Matematika",
  "Minat Teknologi",
  "Minat Kesehatan",
];

export default function InterestForm({ onNext, onBack }) {
  const [formData, setFormData] = useState(
    Object.fromEntries(interests.map((item) => [item, null]))
  );

  const [errors, setErrors] = useState({});

  const handleChange = (interest, value) => {
    setFormData({ ...formData, [interest]: parseInt(value) });
    setErrors({ ...errors, [interest]: "" });
  };

  const validate = () => {
    const newErrors = {};
    interests.forEach((interest) => {
      if (formData[interest] == null) {
        newErrors[interest] = "Harap pilih tingkat minat.";
      }
    });
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onNext(formData);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-3xl mx-auto">
      <h2 className="text-center text-2xl lg:text-3xl font-bold mb-2 text-[#607DA8]">
        Masukkan Minat Anda
      </h2>
      <p className="text-center text-sm lg:text-base text-gray-600 mb-2">
        Pilih tingkat minat Anda dari 1 hingga 5, di mana:
      </p>
      <div className="flex justify-center items-center gap-8 mb-6 flex-wrap text-sm lg:text-base text-gray-700">
        <div className="flex items-center gap-2">
          <img
            src="/assets/emot/1.svg"
            alt="Sangat Tidak Minat"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <span>Sangat Tidak Minat</span>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="/assets/emot/5.svg"
            alt="Sangat Minat"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <span>Sangat Minat</span>
        </div>
      </div>

      <div className="space-y-8">
        {interests.map((interest) => (
          <div key={interest}>
            <label className="block font-bold mb-4 text-center text-base lg:text-lg">
              {interest}
            </label>
            <div className="flex justify-center items-center flex-wrap gap-4">
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value} className="relative">
                  <input
                    type="radio"
                    name={interest}
                    value={value}
                    checked={formData[interest] === value}
                    onChange={(e) =>
                      handleChange(interest, parseInt(e.target.value))
                    }
                    className="sr-only peer"
                  />
                  {/* <div className="w-14 h-14 rounded-full transition duration-300 cursor-pointer peer-checked:ring-4 peer-checked:ring-[#607DA8] flex items-center justify-center hover:scale-110">
                    <img
                      src={`/assets/emot/${value}.svg`}
                      alt={`Emoticon ${value}`}
                      className="w-10 h-10"
                    />
                  </div> */}

                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full transition duration-300 cursor-pointer peer-checked:ring-4 peer-checked:ring-[#607DA8] flex items-center justify-center hover:scale-110">
                    <img
                      src={`/assets/emot/${value}.svg`}
                      alt={`Emoticon ${value}`}
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                  </div>
                </label>
              ))}
            </div>
            {errors[interest] && (
              <p className="text-center text-red-500 mt-2 text-sm">
                {errors[interest]}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
        <button
          onClick={onBack}
          className="flex-1 bg-gray-300 text-white py-3 hover:bg-[#4f6c96] text-lg font-jersey font-bold rounded"
        >
          Kembali
        </button>

        <button
          onClick={handleSubmit}
          className="flex-1 bg-[#607DA8] text-white py-3 hover:bg-[#4f6c96] text-lg font-jersey font-bold rounded"
        >
          Lanjut
        </button>
      </div>
    </div>
  );
}

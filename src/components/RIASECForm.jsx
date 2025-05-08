import { useState } from "react";

export default function RIASECForm({ onBack, onNext }) {
  const [formData, setFormData] = useState({
    realistic: "",
    investigate: "",
    artistic: "",
    social: "",
    enterprising: "",
    conventional: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onNext(formData);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl w-110">
      <h2 className="text-center text-3xl font-bold mb-4 text-[#607DA8]">
        Hasil Test RIASEC
      </h2>
      {[
        "Realistic",
        "Investigate",
        "Artistic",
        "Social",
        "Enterprising",
        "Conventional",
      ].map((field) => (
        <div key={field} className="mb-4">
          <label
            htmlFor={field}
            className="block text-lg font-bold text-gray-700 mb-1"
          >
            {field.charAt(0).toUpperCase() +
              field.slice(1).replace(/([A-Z])/g, " $1")}
          </label>
          <input
            id={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={`Masukkan Nilai ${
              field.charAt(0).toUpperCase() + field.slice(1)
            }`}
            className="w-full border border-gray-300 p-2 h-[60px]"
          />
        </div>
      ))}
      <div className="mt-6 flex justify-between gap-x-4">
        <button
          onClick={onBack}
          className="flex-1 bg-gray-300 text-white py-3 hover:bg-[#4f6c96] text-xl font-jersey font-bold rounded"
        >
          Kembali
        </button>

        <button
          onClick={handleSubmit}
          className="flex-1 bg-[#607DA8] text-white py-3 hover:bg-[#4f6c96] text-xl font-jersey font-bold rounded"
        >
          Lanjut
        </button>
      </div>
    </div>
  );
}

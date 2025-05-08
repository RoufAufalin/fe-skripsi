import { useState } from "react";

export default function AcademicForm({ onNext }) {
  const [formData, setFormData] = useState({
    ipa: "",
    ips: "",
    matematika: "",
    bahasaIndonesia: "",
    bahasaInggris: "",
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
        Nilai Akademik
      </h2>
      {["IPA", "IPS", "matematika", "bahasaIndonesia", "bahasaInggris"].map(
        (field) => (
          <div key={field} className="mb-3">
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
        )
      )}
      <button
        onClick={handleSubmit}
        className="bg-[#607DA8] text-white w-full py-2 hover:bg-[#4f6c96] w-[350px] h-[60px] text-xl font-jersey font-bold rounded"
      >
        Lanjut
      </button>
    </div>
  );
}

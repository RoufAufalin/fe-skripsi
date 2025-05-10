import { useState } from "react";

export default function AcademicForm({ onNext }) {
  const [formData, setFormData] = useState({
    ipa: "",
    ips: "",
    matematika: "",
    bahasaIndonesia: "",
    bahasaInggris: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const num = parseFloat(value);
      if (value === "") {
        newErrors[key] = "Nilai wajib diisi.";
      } else if (isNaN(num) || num < 0 || num > 100) {
        newErrors[key] = "Nilai harus antara 0 dan 100.";
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
    <div className="bg-white p-6 pt-10 rounded-xl shadow-xl w-full max-w-md mx-auto">
      <h2 className="text-center text-2xl lg:text-3xl font-bold mb-6 text-[#607DA8]">
        Nilai Akademik
      </h2>

      {["ipa", "ips", "matematika", "bahasaIndonesia", "bahasaInggris"].map(
        (field) => (
          <div key={field} className="mb-4">
            <label
              htmlFor={field}
              className="block text-base font-bold text-gray-700 mb-1"
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
              className={`w-full border p-3 h-14 rounded ${
                errors[field] ? "border-red-500" : "border-gray-300"
              }`}
              type="number"
              min="0"
              max="100"
            />
            {errors[field] && (
              <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
            )}
          </div>
        )
      )}

      <button
        onClick={handleSubmit}
        className="bg-[#607DA8] text-white w-full py-3 mt-4 hover:bg-[#4f6c96] text-xl font-jersey font-bold rounded"
      >
        Lanjut
      </button>
    </div>
  );
}

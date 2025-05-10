import { useState } from "react";

export default function RIASECForm({ onBack, onNext }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    realistic: "",
    investigate: "",
    artistic: "",
    social: "",
    enterprising: "",
    conventional: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // clear error on change
  };

  const validate = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (value === "") {
        newErrors[key] = "Nilai wajib diisi.";
      } else if (isNaN(value)) {
        newErrors[key] = "Harus berupa angka.";
      } else if (value < 0 || value > 100) {
        newErrors[key] = "Nilai harus antara 0 - 100.";
      }
    });
    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const formattedData = Object.fromEntries(
        Object.entries(formData).map(([k, v]) => [k, parseFloat(v)])
      );
      await onNext(formattedData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md mx-auto relative">
      {loading && (
        <div className="absolute inset-0 bg-white/30 z-10 flex items-center justify-center rounded-xl">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#607DA8] border-t-transparent"></div>
        </div>
      )}

      <h2 className="text-center text-3xl font-bold mb-4 text-[#607DA8]">
        Hasil Tes RIASEC
      </h2>
      {Object.keys(formData).map((field) => (
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
            className="w-full border border-gray-300 p-2 h-[60px] rounded"
            disabled={loading}
            type="number"
            min="0"
            max="100"
          />
          {errors[field] && (
            <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
          )}
        </div>
      ))}

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

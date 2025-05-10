import { useState } from "react";

export default function ProfileForm({ onNext }) {
  const [profileData, setProfileData] = useState({
    nama: "",
    kelas: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });

    // Reset error ketika pengguna mulai mengetik ulang
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!profileData.nama.trim()) {
      newErrors.nama = "Nama tidak boleh kosong.";
    }
    if (!profileData.kelas.trim()) {
      newErrors.kelas = "Kelas tidak boleh kosong.";
    }
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onNext(profileData);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg mx-auto">
      <h2 className="text-center text-3xl font-bold mb-4 text-[#607DA8]">
        Masukkan Data Diri
      </h2>
      {["nama", "kelas"].map((field) => (
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
            value={profileData[field]}
            onChange={handleChange}
            placeholder={`Masukkan ${
              field.charAt(0).toUpperCase() + field.slice(1)
            }`}
            className={`w-full border ${
              errors[field] ? "border-red-500" : "border-gray-300"
            } p-2 h-[60px] rounded-md`}
          />
          {errors[field] && (
            <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
          )}
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="bg-[#607DA8] text-white w-full py-2 hover:bg-[#4f6c96] text-xl font-jersey font-bold rounded-md mt-4"
      >
        Lanjut
      </button>
    </div>
  );
}

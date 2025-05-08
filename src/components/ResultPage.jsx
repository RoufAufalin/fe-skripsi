export default function ResultPage({ onBack }) {
  // Dummy data for demonstration
  const data = [
    "Matematika",
    "Bahasa Inggris",
    "Ilmu Pengetahuan Alam",
    "Ilmu Pengetahuan Sosial",
    "Bahasa Indonesia",
  ];
  return (
    <div className="bg-white p-6 rounded-xl shadow-xl w-110">
      <h2 className="text-center text-3xl font-bold mb-2 text-[#607DA8]">
        Hasil Rekomendasi
      </h2>
      <h2 className="text-center text-lg font-bold mb-4 ">
        Mata Pelajaran yang Sesuai dengan Profil Kamu Adalah:
      </h2>
      <div className="mb-6">
        <ul className="list-inside text-lg font-bold text-gray-700">
          {data.map((item, index) => (
            <li
              key={index}
              className="mb-2 bg-green-600 text-white px-4 py-3 rounded-md shadow-md font-semibold text-lg"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onBack}
        className="bg-[#607DA8] text-white w-full py-2 hover:bg-[#4f6c96] w-[350px] h-[60px] text-xl font-jersey font-bold rounded"
      >
        Lanjut
      </button>
    </div>
  );
}

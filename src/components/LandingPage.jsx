export default function LandingPage({ onStart }) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 py-8 gap-6 lg:gap-40">
      {" "}
      {/* Menambahkan gap lebih besar pada tampilan desktop */}
      <div className="w-full max-w-xl lg:w-2/3">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 font-body text-white text-center lg:text-left">
          Selamat Datang di Aplikasi Rekomendasi Mata Pelajaran
        </h1>
        <p className="mb-8 font-body text-white text-center lg:text-left">
          Temukan Mata Pelajaran Sesuai dengan Minat dan BakatMU!
        </p>

        <div className="flex justify-center lg:justify-start">
          <button
            onClick={onStart}
            className="bg-[#607DA8] text-white w-full max-w-xs h-[50px] text-xl hover:bg-[#4f6c96] font-jersey font-bold rounded"
          >
            AYO!
          </button>
        </div>
      </div>
      <img
        src="/assets/illustrasi.svg"
        alt="Ilustrasi"
        className="w-full max-w-sm"
      />
    </div>
  );
}

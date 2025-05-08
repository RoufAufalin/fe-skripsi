export default function LandingPage({ onStart }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" p-6  w-[600px]">
        <h1 className="text-4xl font-bold mb-4 font-body text-white">
          Selamat Datang di Aplikasi Rekomendasi Mata Pelajaran
        </h1>
        <p className=" mb-8 font-body text-white">
          Temukan Mata Pelajaran Sesuai dengan Minat dan BakatMU!
        </p>

        <div className="flex mb-4">
          <button
            onClick={onStart}
            className="bg-[#607DA8] text-white w-[350px] h-[60px] text-xl hover:bg-[#4f6c96] font-jersey font-bold"
          >
            AYO!
          </button>
        </div>
      </div>

      <img src="/assets/illustrasi.svg" alt="Logo" className="mx-auto" />
    </div>
  );
}

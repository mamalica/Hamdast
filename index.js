import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-6 flex flex-col items-center justify-center text-center">
      <Head>
        <title>همدست | Hamdast</title>
        <meta name="description" content="پلتفرم مردمی همدست برای ساخت کمپین‌های کمک و همدلی" />
      </Head>
      <main className="max-w-2xl">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">همدست</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          همدست پلتفرمی برای کمک به انسان‌هایی‌ست که صدای رسایی برای کمک خواستن ندارند.
          با هم همدست می‌شویم تا گره‌ای از زندگی هم باز کنیم.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="#" className="px-6 py-3 text-lg bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl shadow-xl">
            🎯 شروع کمپین جدید
          </a>
          <a href="#" className="px-6 py-3 text-lg border border-emerald-600 text-emerald-600 rounded-2xl">
            👁️‍🗨️ دیدن کمپین‌ها
          </a>
        </div>
        <div className="mt-12 text-sm text-gray-500">
          <p>با ما همدست شو. نجات دهنده باش.</p>
        </div>
      </main>
    </div>
  );
}

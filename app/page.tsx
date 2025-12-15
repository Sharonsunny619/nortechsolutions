export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8 bg-white">
      <div className="max-w-2xl w-full text-left">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
          Website under  <br />
          Maintanence,We&apos;ll be back <br />
          soon!
        </h1>
        <p className="text-md sm:text-lg text-gray-600 mb-4">
          Sorry for the inconvenience but we&rsquo;re performing some maintenance at
          the moment. If you need to you can always{" "}
          <span className="text-orange-500">contact us</span>, otherwise we&rsquo;ll be
          back online shortly!
        </p>
        <p className="text-lg text-gray-600">
          &mdash; Team NORTECH😊
        </p>
      </div>
    </main>
  );
}

export default function ErrorPage({ message = "Something went wrong." }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-red-50">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Error</h1>
      <p className="text-lg mb-6 text-red-800">{message}</p>
      <a
        href="/"
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Back to Home
      </a>
    </div>
  );
}

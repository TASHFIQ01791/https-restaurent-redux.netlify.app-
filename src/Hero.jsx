export default function Hero() {
  return (
    <section className="relative w-full h-64 md:h-80 lg:h-96">
      <img
        src="/header_img.png"
        alt="Delicious Meals"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-2">
          Discover Delicious Meals
        </h1>
        <p className="text-white text-lg max-w-xl">
          Explore thousands of recipes from all around the world
        </p>
      </div>
    </section>
  );
}

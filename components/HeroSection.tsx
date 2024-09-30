const HeroSection = () => {
  return (
    <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/Backgroundimage.jpg')" }}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Discover Your Next Adventure</h1>
        <p className="text-lg text-white mb-8">Explore the world with us. Unique experiences await!</p>
        <div className="flex justify-center">
          <input type="text" placeholder="Where do you want to go?" className="border rounded-l-lg px-4 py-2 w-64" />
          <button className="bg-teal-500 text-white rounded-r-lg px-6 py-2">Search</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

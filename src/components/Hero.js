import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-32"
      style={{
        backgroundImage: "url('/heropic.jpg')", 
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-transparent opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center items-start h-full">
        <p className="text-sm font-semibold uppercase bg-white text-orange-600 px-4 py-1 rounded-lg shadow mb-4">
          Bienvenue à l'ENSI Bureau D'Etudiant
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
        Votre Passerelle Vers l'Excellence Étudiante et la Vie Associative
        </h1>
        <p className="text-lg md:text-2xl font-light mb-6">
        Une communauté dynamique au cœur de la réussite des étudiants de l'ENSI
        </p>
        <a
          href="/apply"
          className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition duration-300"
        >
          Rejoignez l'Aventure
        </a>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white text-black py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Column: Text Content */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-6" >À Propos du BDE ENSI</h2>
          <p className="text-lg leading-relaxed mb-4">
            Le Bureau des Étudiants (BDE) de l'ENSI est une association
            étudiante dynamique qui organise des événements culturels, sportifs
            et académiques pour enrichir la vie étudiante.
          </p>
          <p className="text-lg leading-relaxed">
            Notre objectif est de favoriser la cohésion, l'entraide et
            l'épanouissement des étudiants en offrant des opportunités
            exceptionnelles pour s'engager et réussir.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="md:w-1/2 md:pl-8">
          <img
            src="/picture.jpg"
            alt="À Propos du BDE"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

import React from "react";
import Block1 from "../images/4.png";
import Block2 from "../images/5.jpg";

const Autre = () => (
  <div className="w-full flex flex-col bg-#D2B7A2">
    {/* Premier bloc avec image de fond */}
    <section
      className="relative w-full min-h-screen bg-cover bg-center mt-14"
      style={{ backgroundImage: `url(${Block1})` }}
    >
      {/* Overlay sombre plus prononcé */}
      <div className="absolute inset-0 bg-secondary bg-opacity-60 z-0 filter" />

      {/* Contenu centré */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-7 h-full p-8">
        {/* Wrapper pour texte avec fond semi-transparent */}
        <div className="bg-white bg-opacity-60 backdrop-blur-sm p-6 rounded-lg">
          <p className="text-primary font-Alegreya text-6xl md:text-6xl max-w-2xl text-center">
            Conception
          </p>
          <p className="text-primary  text-2xl md:text-2xl max-w-2xl text-center mt-10">
          Conçu au Sénégal, Inspiré par le Monde.
          DJOL, qui signifie "grand" dans notre langue maternelle, incarne une vision : un voyage à travers les couleurs et les cultures du monde. 
            <br />  
            <br />  
            Nous travaillons avec des ateliers locaux au Sénégal, valorisant un savoir-faire ancestral tout en respectant des valeurs éthiques et responsables.
          </p>
        </div>
      </div>
    </section>

    {/* Deuxième bloc avec seconde image de fond */}
    <section
      className="relative w-full min-h-screen bg-cover bg-center mt-14"
      style={{ backgroundImage: `url(${Block2})` }}
    >
      {/* Overlay sombre plus prononcé */}
      <div className="absolute inset-0 bg-secondary bg-opacity-60 z-0 filter" />

      {/* Contenu centré */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-7 h-full p-8">
        {/* Wrapper pour texte avec fond semi-transparent */}
        <div className="bg-white bg-opacity-60 backdrop-blur-sm p-6 rounded-lg">
          <p className="text-primary font-Alegreya text-6xl md:text-6xl max-w-2xl text-center">
          Une mode inclusive
          </p>
          <p className="text-primary  text-2xl md:text-2xl max-w-2xl text-center mt-10">
          DJOL est plus qu'une marque de vêtements : c'est une célébration de la diversité des corps et des identités. Nous croyons que chaque femme mérite des vêtements qui la mettent en valeur et reflètent sa singularité.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Autre;
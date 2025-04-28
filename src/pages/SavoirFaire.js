import React from "react";
import DressImg from "../images/RobeSF.jpg";
import Tissus1 from "../images/Tissus1.jpg"; // Assurez-vous que le chemin est correct

import Tissus2 from "../images/Tissus2.jpg";  // Assurez-vous que le chemin est correct


const SavoirFaire = () => (
  <div className="relative w-full min-h-screen bg- flex flex-col items-center justify-center p-6"
    style={{ backgroundColor: "#D6C3B6" }} 

  >
    {/* Titre global au-dessus */}
    <h1 className="text-6xl font-Alegreya text-primary mb-6">Savoir-Faire</h1>

    
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
      {/* Titre */}
      
      {/* Image gauche (Robe) */}
      <div className="w-full md:w-1/3">
        <img
          src={DressImg}
          alt="Robe DJOL"
          className="w-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Texte centré */}
      <div className="w-full md:w-1/3 bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-xl text-center">
  
        <p className="text-2xl text-primary mb-4">
          Nous sélectionnons les tissus les plus nobles et adaptés pour garantir confort,
          élégance et longévité à chaque pièce.
        </p>
        <p className="text-2xl text-primary mt-8">
          De la confection artisanale aux finitions soignées, notre expertise
          assure un vêtement d’exception, pensé pour sublimer chaque morphologie.
        </p>
      </div>

      {/* Images droite empilées */}
      <div className="w-full md:w-1/3 flex flex-col gap-4">
      <img
          src={Tissus1}
          alt="Tissu bleu"
          className="w-full object-cover rounded-lg shadow-lg"
        />  

         <img
          src={Tissus2}
          alt="Tissu bleu"
          className="w-full object-cover rounded-lg shadow-lg"
        /> 
      </div>
    </div>
  </div>
);

export default SavoirFaire;



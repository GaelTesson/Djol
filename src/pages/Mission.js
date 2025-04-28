import React from "react";
import MissionBG from "../images/MissionBG.jpg"; // Assurez-vous que le chemin est correct

const Mission = () => (
  <div className="relative w-full h-screen overflow-hidden">

  
    {/* Fond d’écran via import JS */}
    <div
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{ backgroundImage: `url(${MissionBG})` }}
    />

    {/* Filtre jaunâtre */}
    <div className="absolute inset-0 bg-secondary bg-opacity-60 z-0" />

    {/* Contenu centré */}
    <div className="absolute inset-0 flex items-center justify-center z-10 px-7">
      {/* Boîte de texte */}
      <div className="bg-white bg-opacity-35 backdrop-blur-sm p-8 rounded-lg shadow-xl max-w-3xl text-center">
        <h1 className="text-6xl  text-primary font-Alegreya mb-8">Notre Mission</h1>
        <p className="text-2xl font-semibold  text-primary mb-8 z-10 ">
          Bienvenue chez DJOL, la marque de prêt-à-porter dédiée aux femmes de grandes tailles (1 m 75 et plus) qui embrasse l'inclusivité et célèbre la diversité.
        </p>
        <p className="text-2xl font-semibold text-primary mb-8">
          Chez DJOL, chaque centimètre compte. Nous créons des vêtements spécialement pensés pour répondre aux besoins des femmes grandes, tout en restant accessibles à toutes celles qui recherchent élégance, confort et qualité.
        </p>
        
      </div>
    </div>

  </div>
);

export default Mission;

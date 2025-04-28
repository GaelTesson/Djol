import React from "react";
import Djol from "../images/DJOL.png"; // Assurez-vous que le chemin est correct

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden padding-top-10">

      {/* Vidéo en fond */}
      <video
        key="background-video"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/20250427_175548_145615669187771.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay couleur primaire */}
      <div className="absolute inset-0 bg-primary bg-opacity-40 z-0 mix-blend-overlay" />

      {/* Contenu : Logo */}
      <div
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{ backgroundImage: `url(${Djol})`, 
              opacity: 0.7,
              
    }}
    />
      </div>

    
  );
};

export default Home;

import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";


const Contact = () => (
  <div className="relative w-full h-screen overflow-hidden">

    {/* Fond d’écran */}
    <div
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{ backgroundColor: "#D6C3B6" }}
  
    />

 

    {/* Contenu centré */}
    <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
      <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-xl text-center">
        <h1 className="text-6xl font-Alegreya text-primary mb-6">Contact</h1>
        <p className="text-2xl text-primary mb-6">
        Rejoignez DJOL dans cette aventure où style, qualité et inclusion se rencontrent pour redéfinir la mode.
        </p>
        <div className="flex justify-center gap-8 text-4xl text-primary">
          <a
            href="https://www.instagram.com/djol" // remplace par ton URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@tonprofil" // remplace par ton URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </div>

  </div>
);

export default Contact;

import React from 'react';
import AboutHero from "../../components/about/AboutHero";
import AboutWhoWeAre from "../../components/about/AboutWhoWeAre";
import AboutBusiness from "../../components/about/AboutBusiness";
import AboutFlagship from "../../components/about/AboutFlagship";
import AboutWhyChoose from "../../components/about/AboutWhyChoose";
import AboutLeadership from "../../components/about/AboutLeadership";
import AboutTeam from "../../components/about/AboutTeam";
import AboutCTA from "../../components/about/AboutCTA";

export default function About() {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* 00. Hero Section (Keeps its own dark/cinematic styling) */}
      <AboutHero />

      {/* 01. Light Blue Section */}
      <div className="bg-brand-blue/[0.03]">
        <AboutWhoWeAre />
      </div>

      {/* 02. White Section */}
      <div className="bg-white">
        <AboutBusiness />
      </div>

      {/* 03. Light Blue Section */}
      <div className="bg-brand-blue/[0.03]">
        <AboutFlagship />
      </div>

      {/* 04. White Section */}
      <div className="bg-white">
        <AboutWhyChoose />
      </div>

      {/* 05. Light Blue Section */}
      <div className="bg-brand-blue/[0.03]">
        <AboutLeadership />
      </div>

      {/* 06. White Section */}
      <div className="bg-white">
        <AboutTeam />
      </div>

      {/* 07. Light Blue Section (Final Exit) */}
      <div className="bg-brand-blue/[0.03]">
        <AboutCTA />
      </div>

      {/* Tailwind Animations & Global Styles */}
      <style jsx global>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          50% { transform: scale(1.15) translate(1%, 1%); }
          100% { transform: scale(1); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-ken-burns { animation: ken-burns 20s ease infinite; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in-left { animation: fadeInLeft 0.8s ease-out forwards; }
      `}</style>
    </div>
  );
}
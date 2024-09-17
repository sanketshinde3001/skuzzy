import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-blue-100">
      {/* Background with curve */}
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#fff" fillOpacity="1" d="M0,224L1440,32L1440,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container mx-auto py-12 text-center relative z-10">
        <h1 className="text-4xl font-bold mb-4">Wir machen dich erfolgreich.</h1>
        <p className="mb-8">Über 6 Millionen Schüler/innen und Studierende finden kostenlose Lernvideos, Ausbildungsplätze und Jobs.</p>

        {/* Cards */}
        <div className="flex justify-center space-x-4">
          <div className="bg-white shadow-lg p-6 w-64">
            <h2 className="text-xl font-bold mb-2">Lernen und verstehen</h2>
            <p>Über 6.000 hochwertige Lernvideos für dich.</p>
            <button className="mt-4 bg-blue-500 text-white p-2 rounded">Zum Lernportal</button>
          </div>
          <div className="bg-white shadow-lg p-6 w-64">
            <h2 className="text-xl font-bold mb-2">Ausbildung & Studium</h2>
            <p>Finde den perfekten Ausbildungsberuf.</p>
            <button className="mt-4 bg-blue-500 text-white p-2 rounded">Zum Ausbildungsportal</button>
          </div>
          <div className="bg-white shadow-lg p-6 w-64">
            <h2 className="text-xl font-bold mb-2">Jobs, Praktika & Co</h2>
            <p>Finde den perfekten Beruf für dich.</p>
            <button className="mt-4 bg-blue-500 text-white p-2 rounded">Zum Jobportal</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


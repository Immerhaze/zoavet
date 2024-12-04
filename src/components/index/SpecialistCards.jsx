import React from 'react';

const SpecialistCard = ({ name, specialty, description }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
    <div className="mb-4">
      <img className="w-20 h-20 rounded-full mx-auto" src="/images/default-avatar.jpg" alt={name} />
    </div>
    <h3 className="text-xl font-semibold text-[#324947]">{name}</h3>
    <p className="text-[#22867E] font-medium">{specialty}</p>
    <p className="text-[#324947] mt-2">{description}</p>
  </div>
);

export default SpecialistCard;

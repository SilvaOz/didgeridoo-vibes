import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-center py-6">
      <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Didgeridoo Sound. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;

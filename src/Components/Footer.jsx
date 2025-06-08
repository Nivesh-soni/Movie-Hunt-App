import React from 'react';

const Footer = ({isFooterFixed}) => {
  return (
    <footer className={`mt-12 bg-[#121212] text-white py-6 ${isFooterFixed ? 'fixed bottom-0 w-full' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">🎬 Movie Hunt</h2>
          <p className="text-sm text-gray-400">Find your favorite movies anytime.</p>
        </div>


        <div className="text-sm text-gray-500 text-center md:text-right flex items-center flex-col">
        <div className="flex gap-4 text-gray-300">
          <i className="fa-brands fa-facebook text-xl cursor-pointer"></i>
          <i className="fa-brands fa-whatsapp text-xl cursor-pointer"></i>
          <i className="fa-brands fa-twitter text-xl cursor-pointer"></i>
          <i className="fa-brands fa-instagram text-xl cursor-pointer"></i>
        </div>
          © {new Date().getFullYear()} Movie Hunt. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

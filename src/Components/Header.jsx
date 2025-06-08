import React from 'react'
import './Header.css'

const Header = ({ theme , handleTheme ,handleHome }) => {
  return (
    <div className="sm:relative flex-col sm:flex-row w-full flex items-center justify-center py-6">
      <h1 className={`sm:absolute sm:left-1/2 sm:-translate-x-1/2 text-3xl sm:text-[3rem] font-bold gradient mt-2 ${theme === 'dark' ? '' : 'stroked-text'}`}>Movie Hunt</h1>

      <div className="sm:ml-auto flex items-center gap-4 sm:mr-8 mt-4 sm:mt-0">
        <i onClick={handleHome} className={`fa-solid fa-house text-2xl cursor-pointer p-3 w-[3rem] rounded-full transition-all duration-200 ${theme === 'dark' ? 'bg-[#1e1e1e] text-white hover:bg-[#2b2b2b]' : 'bg-white text-black hover:bg-[#aba9a9]'}`}></i>
        <i onClick={handleTheme} className={`fa-solid ${theme === 'dark' ? 'fa-moon' : 'fa-sun'} text-2xl cursor-pointer p-3 w-[3rem] rounded-full transition-all duration-200 ${theme === 'dark' ? 'bg-[#1e1e1e] text-white hover:bg-[#2b2b2b]' : 'bg-white text-black hover:bg-[#aba9a9]'}`}></i>
      </div>

    </div>
  )
}

export default Header

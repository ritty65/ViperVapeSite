import React from 'react';

interface SidebarProps {
  categories: { id: string; title: string }[];
  activeCategory: string | null;
  onSelectCategory: (id: string | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, activeCategory, onSelectCategory }) => {
  const activeClasses = "bg-[var(--primary-color)] text-[var(--bg-color)] tracking-widest";
  const inactiveClasses = "text-[var(--text-color)] hover:bg-[var(--primary-color)] hover:text-[var(--bg-color)] hover:tracking-widest";
  
  return (
    <nav className="hidden md:block w-[250px] bg-[var(--surface-color)] backdrop-blur-md h-screen fixed top-0 left-0 overflow-y-auto border-r-2 border-[var(--primary-color)] z-10">
      <div 
        className="font-teko text-5xl text-center text-[var(--primary-color)] my-8"
        style={{ textShadow: '0 0 5px var(--primary-color), 0 0 10px var(--primary-color)' }}
      >
        VIPER VAPES
      </div>
      <ul className="list-none p-0 m-0">
         <li>
            <button 
              onClick={() => onSelectCategory(null)} 
              className={`w-full text-left block no-underline py-3 px-6 text-base font-bold transition-all duration-200 ${!activeCategory ? activeClasses : inactiveClasses}`}
            >
              All Products
            </button>
          </li>
        {categories.map(category => (
          <li key={category.id}>
            <button 
              onClick={() => onSelectCategory(category.id)} 
              className={`w-full text-left block no-underline py-3 px-6 text-base transition-all duration-200 ${activeCategory === category.id ? activeClasses : inactiveClasses}`}
            >
              {category.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProductMenu from '../components/Products';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { menuData } from '../data/products';

const MenuPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = menuData.map(cat => ({ id: cat.id, title: cat.title }));

  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    // Scroll to top of menu content for better UX on mobile after filter
    const menuContent = document.querySelector('.main-content');
    if (menuContent) {
        menuContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const filteredData = selectedCategory
    ? menuData.filter(category => category.id === selectedCategory)
    : menuData;

  return (
    <div className="flex container mx-auto">
      <Sidebar 
        categories={categories}
        activeCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <div className="main-content ml-0 md:ml-[250px] w-full px-4 sm:px-8 md:px-12 py-8">
        <ProductMenu data={filteredData} />
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default MenuPage;

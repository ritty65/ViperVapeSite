import React from 'react';
import { Product } from '../types';

interface MenuItemCardProps {
  product: Product;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ product }) => {
  return (
    <div 
      className="bg-[var(--surface-color)] backdrop-blur-lg rounded-lg p-6 flex-grow basis-[280px] border border-[var(--border-color)] shadow-[0_0_15px_rgba(0,246,255,0.1)] transition-all duration-200 hover:transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_25px_var(--secondary-color)]"
    >
      <h3 className="font-semibold text-xl text-[var(--text-color)] mt-0 mb-4">
        {product.name}
      </h3>
      <div>
        {product.variations.map((variation, index) => (
          <div 
            key={index} 
            className="flex justify-between text-[var(--subtle-text)] text-sm border-t border-dashed border-[var(--border-color)] pt-2 mt-2"
          >
            <span>{variation.name}</span>
            <span>{variation.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItemCard;

import React from 'react';
import { MenuCategory } from '../types';
import MenuItemCard from './ProductCard';

interface ProductMenuProps {
  data: MenuCategory[];
}

const ProductMenu: React.FC<ProductMenuProps> = ({ data }) => {
  return (
    <div>
      {data.map(category => (
        <section key={category.id} id={category.id} className="mb-16 pt-8">
          <h2 className="font-teko text-6xl text-[var(--primary-color)] mb-8 border-b border-[var(--subtle-text)] pb-4 shadow-[0_0_3px_var(--primary-color)]">
            {category.title}
          </h2>
          <div className="flex flex-wrap gap-6">
            {category.products.map((product, index) => (
              <MenuItemCard key={index} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductMenu;
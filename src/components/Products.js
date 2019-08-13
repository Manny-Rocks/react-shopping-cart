import React from 'react';

// Components
import Product from './Product';

const Products = () => {
	const { products, addItem } = useContext(ProductContext);
	
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;

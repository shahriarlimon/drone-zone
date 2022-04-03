import React from 'react';
import useProducts from '../Hooks/useProducts';
import Product from '../Product/Product';

const Reviews = () => {
    const [products, setProducts] = useProducts();
    return (
        <>
             <section className='text-gray-600 body-font'>
          <div className='container px-5 py-24 mx-auto flex flex-col items-center'>
              <h1 className='text-2xl text-center font-bold mb-12'>Customer review : ({products.length})</h1>
              <div className='flex flex-wrap -m-4'>
                  {
                      products.map(product=><Product key={product.id} product = {product} />)
                  }
              </div>  
          </div>      
      </section>
        </>
    );
};

export default Reviews;
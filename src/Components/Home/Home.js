import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../Hooks/useProducts';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useProducts();
    const navigate = useNavigate();
    return (
        <main className='md:mb-24 mb-24'>
        <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Best drone 2022: the 12 finest flying
              <br className="hidden lg:inline-block"/>cameras you can buy
            </h1>
            <p className="mb-8 leading-relaxed">Looking to spend a bit more on the ultimate aerial imaging tool? The DJI Mavic 3 is tough to beat. It’s inescapably expensive, but its dual-cam configuration – which includes a superb Four Thirds sensor with adjustable aperture – sets a new standard for in-flight filming. </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">View Details</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="drone.jpg"/>
          </div>
        </div>
      </section>
      <hr />
      <section className='text-gray-600 body-font'>
          <div className='container px-5 py-24 mx-auto flex flex-col items-center'>
              <h1 className='text-2xl text-center font-bold mb-12'>Customer review : ({products.slice(0,3).length})</h1>
              <div className='flex flex-wrap -m-4'>
                  {
                      products.slice(0,3).map(product=><Product key={product.id} product = {product} />)
                  }
              </div>  
              <button onClick={()=>navigate('/reviews')} className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg mt-10">View All Reviews</button>   
          </div>      
      </section>
        </main>
    );
};

export default Home;
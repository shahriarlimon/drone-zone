import React from 'react';

const Blogs = () => {
    return (
        <div className=' mx-8 md:mx-20 mt-12 mb-20 md:mb-36 '>
            <div>
                <h1 className='text-2xl my-2'>-What is the purpose of Context API ?</h1>
                <p>The context API is a kind of react structure which helps to transfer unique details and assists in avoiding prop-drilling from all levels of application.The React Context API is a way for React app to create global variables which can be passed around among the nodes.The React Context API creates React.createContext().It returns a consumer and a provider .Provider is a components which provides state so that all related nodes can recieve the stated data.Thus the children nodes able to access data from their parents nodes and use that data according to its need.In that way,The Context API enables to exchange data and helps avoiding prop-drilling from all level of the application.
                </p>
            </div>
            <div className='mt-8'>
                <h1 className='text-2xl my-2'>-What is Semantic Tag ?</h1>
                <p>Semantic HTML tags allows to add meaning to the markup so that web browser, screen reader, and search engine can understand it.A semantic element clearly describes its meaning to both the browser and the developer.Because semantic HTML uses elements for their given purpose, it's easier for both people and machines to read and understand it.	Normally, when a user agent reads content it doesn't understand the context and meaning.In that case, semantic tags assists to serve structured content to users,which is essential  for accessibility and on-page SEO .It makes web pages more informative and adaptable, allowing browsers and search engines to better interpret content.
                </p>
            </div>
        </div>
    );
};

export default Blogs;
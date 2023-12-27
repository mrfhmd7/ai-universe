import React from 'react';

const Button = ({children}) => {
     return (
          <div className='text-center my-8'>
               <button className="btn btn-info text-white">{children}</button>
          </div>
     );
};

export default Button;
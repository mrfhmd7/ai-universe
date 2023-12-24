import React from 'react';

const Button = ({children}) => {
     return (
          <>
               <button className="btn btn-info">{children}</button>
          </>
     );
};

export default Button;
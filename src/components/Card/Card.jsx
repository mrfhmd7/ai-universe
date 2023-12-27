import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Card = () => {
     const [values, setValues] = useState([]);

     useEffect(() => {
          const loadData = async () => {
               const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
               const data = await res.json();
               // console.log(data.data.tools);
               setValues(data.data.tools);
          }
          loadData();
     }, []);
     return (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-10'>
               {
                    values.map(value => <SingleData
                         value={value}
                         key={value.id}
                    ></SingleData>)
               }
          </div>
     );
};

export default Card;
import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import Button from '../Button/Button';

const Card = () => {
     const [values, setValues] = useState([]);

     const [showAll, setShowAll] = useState(false);

     const handleShowAll = () => { 
          setShowAll(true);
     }

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
          <>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-10'>
                    {
                         values.slice(0, showAll ? 12 : 6).map(value => <SingleData
                              value={value}
                              key={value.id}
                         ></SingleData>)
                    }
               </div>
               {
                    !showAll && (
                         <div className='text-center'>
                              <span className='inline-block ' onClick={handleShowAll}><Button>See More</Button></span>
                         </div>
                    )  
                    // <span><Button>Show less</Button></span>
               }
               
          </>
     );
};

export default Card;
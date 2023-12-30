import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const Card = () => {
     const [values, setValues] = useState([]);

     const [showAll, setShowAll] = useState(false);

     const [uniqueId, setUniqueId] = useState(null);

     const [idData, setIdData] = useState({});

     // console.log(uniqueId);

     const handleShowAll = () => { 
          setShowAll(true);
     }

     const handleShowLess = () => { 
          setShowAll(false);
     }

     useEffect(() => {
          // console.log('hi');
          fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
               .then((res) => res.json())
               .then((data) => setIdData(data.data));
     }, [uniqueId]);

     // console.log(idData);

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
                              setUniqueId={setUniqueId}
                         ></SingleData>)
                    }
               </div>
               {
                    !showAll && (
                         <div className='text-center'>
                              <span className='inline-block ' onClick={handleShowAll}><Button>See More</Button></span>
                         </div>
                    )  
               }
               {
                    showAll && (
                         <div className='text-center'>
                              <span className='inline-block ' onClick={handleShowLess}><Button>See less</Button></span>
                         </div>
                    )  
               }
               <Modal idData={idData} />
          </>
     );
};

export default Card;
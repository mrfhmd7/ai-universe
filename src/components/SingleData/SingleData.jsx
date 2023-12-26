import React from "react";

const SingleData = (props) => {
//   console.log(props.value.image);
  const { image, features, name, published_in } = props.value;
  return (
    <>
          <div className="card card-compact w-full h-auto bg-base-100 shadow-2xl">
               <figure>
                    <img className="w-full h-64"
                         src={image}
                         alt="Shoes"
                    />
               </figure>
               <div className="card-body">
                    <h2 className="card-title font-semibold">Features</h2>
                    {
                           features.map((feature,index) =>
                          <p>
                              {index+1}. {feature}  
                         </p>)
                    }  
                    <hr className="border-2 border-stone-400 my-3" />
                    <h2 className="font-bold text-2xl">{name}</h2>
                    {/* <div className="card-actions justify-end">
                         <button className="btn btn-primary">Buy Now</button>
                    </div> */}
               </div>
          </div>
    </>
  );
};

export default SingleData;

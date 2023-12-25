import React from "react";

const SingleData = (props) => {
  console.log(props.value.image);
  const { image, features, name, published_in } = props.value;
  return (
    <div>
          <div className="card card-compact w-full bg-base-100 shadow-2xl">
               <figure>
                    <img className="w-full h-64"
                         src={image}
                         alt="Shoes"
                    />
               </figure>
               <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                         <button className="btn btn-primary">Buy Now</button>
                    </div>
               </div>
          </div>
    </div>
  );
};

export default SingleData;

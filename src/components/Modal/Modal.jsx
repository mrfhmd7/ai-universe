import React from "react";

const Modal = (props) => {
  // console.log(props.idData);
  const { image_link, description, integrations, features } = props.idData;
  // console.log(image_link);
  // console.log(integrations);
  return (
    <>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-2/3 max-w-5xl">
          <div className="card lg:card-side bg-base-100 ">
            <div className="card-body w-1/2  border-2 border-orange-500 rounded-lg mr-2 bg-orange-100">
              <h2 className="card-title">{description ? description : "Not Found"}</h2>
              <div className="flex justify-between ">
                <div>
                  <h2 className="text-xl font-semibold">Features</h2>
                  {
                    Object.values(features || {}).map((feature, index) => (<p key={index}>{index+1}. {feature.feature_name}</p>))
                  }
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Integrations</h2>
                  {
                    // integrations && integrations.map(integration =>(<p>{integration}</p>))
                    integrations &&integrations.map((integration, index) => (<p key={index}>{ integration? integration : "Not Found"}</p>))
                  }
                </div>
              </div>
              
            </div>
            <figure className="w-1/2">
              <img className="w-full h-64"
                src={image_link && image_link[0]}
                alt="Album"
              />
            </figure>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;

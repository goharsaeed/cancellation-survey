import React, { useState } from "react";
import OffComponent from "./components/OffComponent";
import SubmitButton from "./components/SubmitButton";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [getDiscount, setGetDiscount] = useState(false);
  return (
    <>
      {!getDiscount ? (
        <>
          <div className="flex justify-center p-5">
            <>
              <button
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
              >
                Cancel Subscription
              </button>
              {showModal ? (
                <>
                  <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="pt-24 border-0 rounded-lg shadow-lg relative flex flex-wrap w-full bg-white outline-none focus:outline-none p-5">
                        <div className="w-1/5 w-24"><svg viewBox="0 0 20 20">
							<path d="M17.35,2.219h-5.934c-0.115,0-0.225,0.045-0.307,0.128l-8.762,8.762c-0.171,0.168-0.171,0.443,0,0.611l5.933,5.934c0.167,0.171,0.443,0.169,0.612,0l8.762-8.763c0.083-0.083,0.128-0.192,0.128-0.307V2.651C17.781,2.414,17.587,2.219,17.35,2.219M16.916,8.405l-8.332,8.332l-5.321-5.321l8.333-8.332h5.32V8.405z M13.891,4.367c-0.957,0-1.729,0.772-1.729,1.729c0,0.957,0.771,1.729,1.729,1.729s1.729-0.772,1.729-1.729C15.619,5.14,14.848,4.367,13.891,4.367 M14.502,6.708c-0.326,0.326-0.896,0.326-1.223,0c-0.338-0.342-0.338-0.882,0-1.224c0.342-0.337,0.881-0.337,1.223,0C14.84,5.826,14.84,6.366,14.502,6.708"></path>
						</svg></div>
                        <div className="w-4/5">
                          {/*header*/}
                          <div className="flex items-start justify-center p-2 border-solid border-slate-200 rounded-t">
                            <h3 className="text-xl font-bold">
                              Before You Go...
                              <br />
                              Would 50% Off For 6 Months Help?
                            </h3>
                            <button
                              className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                            >
                              <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                              </span>
                            </button>
                          </div>
                          {/*body*/}
                          <div className="relative p-6 flex-auto">
                            <p className="my-1">
                              We know things REALLY suck in the world right now-
                              and many businesses and freelancers are struggling
                              to stay afloat during this covid-19 crisis.
                            </p>
                            <p className="font-bold my-4">
                              So if you could use the extra coushion, grab 50%
                              off for 6 months.
                            </p>
                            <p>We hope you're staying safe and healthy!</p>
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-start p-6 ">
                            <SubmitButton
                              text=" 50% Off For 6 Months"
                              func={() => setGetDiscount(true)}
                            />

                            <button
                              className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              NO thanks! i'll Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </>
          </div>
        </>
      ) : (
        <OffComponent />
      )}
    </>
  );
};

export default App;

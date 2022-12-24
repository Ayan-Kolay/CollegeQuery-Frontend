import React from "react";

const SignUp = () => {
  return (
    <div className="min-h-screen pt-32 bg-gradient-to-br from-amber-400 to-amber-200">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-9/12 lg:w-10/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-gradient-to-bl from-teal-500 to-teal-200">
            <h1 className="text-white text-3xl mb-4">Welcome</h1>
            <div>
              <p className="text-black lg:leading-8 lg:mx-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac <a href="#" className="text-white font-semibold">Learn more</a></p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-8 lg:py-16 px-12">
            <h2  className="text-2xl lg:text-3xl mb-4">Register</h2>
            <p className="mb-4">
              Create your account. It’s free and only take a minute
            </p>
            <form action="#">
              <div className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="Firstname" className="border border-gray-400 py-1 px-2"/>
                <input type="text" placeholder="Surname" className="border border-gray-400 py-1 px-2"/>
              </div>
              <div className="mt-4 lg:mt-5">
                <input type="text" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full"/>
              </div>
              <div className="mt-4 lg:mt-5">
                <input type="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full"/>
              </div>
              <div className="mt-4 lg:mt-5">
                <input type="password" placeholder="Confirm Password" className="border border-gray-400 py-1 px-2 w-full"/>
              </div>
              <div className="mt-4 lg:mt-5">
                <input type="checkbox" className="border border-gray-400"/>
                <span>
                  I accept the <a href="#" className="text-teal-500 font-semibold">Terms of Use</a> &  <a href="#" className="text-teal-500 font-semibold">Privacy Policy</a> 
                </span>
              </div>
              <div className="mt-5">
                <button className="w-full bg-teal-700 py-3 text-center text-white hover:bg-teal-600 hover:shadow-lg focus:bg-teal-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-700 active:shadow-lg transition duration-150 ease-in-out">Register Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

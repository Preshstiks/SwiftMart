import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <>
      <div class="py-16">
        <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div
            class="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80")',
            }}
          ></div>
          <div class="w-full p-8 lg:w-1/2">
            <h2 class="text-2xl font-semibold text-gray-700 text-center">
              SwiftMart
            </h2>
            <p class="text-xl text-gray-600 text-center">Contact Us</p>
            <div class="mt-4">
              <div class="flex justify-between">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  Phone Number
                </label>
              </div>
              <input
                class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                placeholder="Enter Your Mobile Number"
              />
            </div>
            <div class="mt-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                placeholder="Enter Your Email Address"
              />
            </div>
            <div class="mt-4">
              <div class="flex justify-between">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
              </div>
              <textarea
                class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none resize-none"
                rows={5}
                placeholder="Enter Your Message"
              />
            </div>
            <div class="mt-8">
              <button class="bg-[#051b35] text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                Login
              </button>
            </div>
            <div class="mt-4 flex items-center justify-between">
              <span class="border-b w-1/5 md:w-1/4"></span>
              <Link to="/login" class="text-xs text-gray-500 uppercase">
                or sign up
              </Link>
              <span class="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

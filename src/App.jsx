import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div className=' h-screen w-full bg-pink-500 content-center'>
      <div className="sm:h-full sm:w-full sm:pl-4 pl-1 pr-1 mx-auto bg-white rounded-3xl py-10 xs:w-full h-full md:w-3/4 md:h-3/4 lg:w-2/4 lg:h-3/4">
      <h1 className="text-center text-2xl m-6 text-black font-bold ">SIGN IN
      
      </h1>
        <form action="#">
          <label className="text-2xl text-gray-500 ">  Email : <br />
            <input type="email" required placeholder="✉ Email" className="border-2 w-2/3 py-2 m-6 rounded-md lg:m-3" />
          </label> 
          <br />
          <label className="text-2xl text-gray-500">Password : <br />
            <input type="password" required placeholder="🔒Password " className="border-2 w-2/3 py-2 m-6 rounded-md text-gray-700 lg:m-3" />
          </label>
          <br />
          <label htmlFor="" className="text-black w-full mr-20">
          <input type="checkbox" required className="m-2 text-gray-500 text-left" /> Remember Me
          </label>
          <a href="#" className="text-right border ml-5 text-blue-400 font-bold hover:text-red-400 active:text-black xs:block sm:ml-20 lg:mr-10">Forgot Password</a>
          
          <label className="m-10 w-full sm:pl-4">
            
            <input type="submit" value="Login" className="py-3 m-auto mt-24  text-white bg-blue-500 rounded-md hover:bg-blue-400 active:bg-white xs:w-2/4 sm:w-3/4 lg:w-3/4 lg:ml-7 lg:m-6" />  {/* Button */}
            </label>
        </form>
      </div>
    </div>
  );
}

export default App;
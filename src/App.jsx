import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div className=' h-screen w-full bg-pink-500 text-center content-center'>
      <div className="h-2/3 w-2/5 mx-auto bg-white rounded-3xl text-center py-10">
      <h1 className="text-2xl m-6 text-black font-bold">SIGN IN
      
      </h1>
        <form action="#">
          <label className="text-2xl text-gray-500">  Email : 
            <input type="email" required placeholder="✉ Email" className="border-2 w-2/3 py-2 m-6 rounded-md " />
          </label> 
          
          <label className="text-2xl text-gray-500">Password : 
            <input type="password" required placeholder="🔒Password " className="border-2 w-2/3 py-2 m-6 rounded-md text-gray-700" />
          </label>
          <br />
          <label htmlFor="" className="text-black w-full mr-20">
          <input type="checkbox" required className="m-2 text-gray-500 text-left" /> Remember Me
          </label>
          <a href="#" className="text-right border ml-16 text-blue-400 font-bold hover:text-red-400 active:text-black ">Forgot Password</a>
          
          <label className="m-10">
            
            <input type="submit" value="Login" className="w-2/4 py-3 mt-16  text-white bg-blue-500 rounded-md hover:bg-blue-400 active:bg-white" />  {/* Button */}
            </label>
        </form>
      </div>
    </div>
  );
}

export default App;
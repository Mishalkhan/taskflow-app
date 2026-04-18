import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <Navbar />


      {/* HERO SECTION */}
      <div
        className="relative w-full min-h-[80vh] flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: "url('../hero3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Overlay (VERY IMPORTANT) */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl">

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Manage Your Work <br /> Stay Organized & Productive
          </h2>

          <p className="text-gray-200 mb-8">
            A simple and powerful way to manage your daily tasks and stay focused on what matters most.
          </p>

          {/* Button */}
          <button
          onClick={() => navigate("/dashboard")}
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-lg"
          >
            Start Now
          </button>
          


        </div>

      </div>


      {/* FEATURES SECTION */}
      <div id="features" className="bg-gray-100 py-24 border-b">
      <div className="max-w-6xl mx-auto px-6 space-y-24">

      {/* SECTION 1 */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Image */}
      <div>
        <img
          src="../img1.avif"
          alt="feature"
          className="rounded-2xl shadow-lg w-full"
        />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-2xl font-bold mb-4">
          Manage Tasks Easily
        </h3>
        <p className="text-gray-600">
          Organize your daily work with a clean and simple task system.
          Stay focused and never miss important work.
        </p>
      </div>

      </div>

      {/* SECTION 2 */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Text */}
      <div className="order-2 md:order-1">
        <h3 className="text-2xl font-bold mb-4">
          Stay Organized & Focused
        </h3>
        <p className="text-gray-600">
          Keep everything in one place and improve your workflow
          with structured task management.
        </p>
      </div>

      {/* Image */}
      <div className="order-1 md:order-2">
        <img
          src="../img2.avif"
          alt="feature"
          className="rounded-2xl shadow-lg w-full"
        />
      </div>

      </div>

      {/* SECTION 3 */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Image */}
      <div>
        <img
          src="../img3.jpg"
          alt="feature"
          className="rounded-2xl shadow-lg w-full"
        />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-2xl font-bold mb-4">
          Track Your Progress
        </h3>
        <p className="text-gray-600">
          Monitor your completed tasks and stay motivated
          as you move closer to your goals.
        </p>
      </div>

      </div>

      </div>
      </div>


      {/* CTA SECTION */}
      <div  id="about" className="bg-gradient-to-r from-gray-200 to-gray-100 py-20 text-center text-gray-700 px-6 ">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start Managing Your Work Today
        </h2>

        <p className="text-gray-500 mb-6 max-w-xl mx-auto">
          Take control of your daily tasks and improve your productivity
          with a simple and powerful system.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-lg"
        >
          Get Started Now
        </button>
          

      </div>

      <Footer/>
    </div>
  );
};

export default Home;
import Image from "next/image"; // Image component import karna

export default function Home() {
  return (
    <div>
      <header>
        <nav className="flex bg-blue-900 w-full h-20 pt-5">
          <div className="bg-green-800 h-10 w-24 font-bold text-white pt-2">Logo</div>
          <nav className="flex justify-center w-full h-20 pb-10 ml-16">
            <p className="text-blue-300 text-3xl content-center">Welcome to the Flex Page</p>
          </nav>
          <nav className="flex justify-end mr-6 ml-6 pt-2 pb-5 w-full h-16 gap-4">
            <div className="h-10 w-28 inline-block align-bottom font-bold text-white">Menu</div>
            <div className="h-10 w-28 font-bold text-white">Home</div>
            <div className="h-10 w-28 font-bold text-white">About</div>
            <div className="h-10 w-28 font-bold text-white">Contact us</div>
          </nav>
        </nav>
      </header>

      <footer>
        <nav className="flex mr-6 ml-6 pt-5 gap-4">
          <div className="w-1/2 h-60 relative"> 
            <Image
              src="/images/flex pic.jpg" 
              alt="Flex Picture"
              layout="fill" 
              objectFit="cover"
            />
          </div>
          <div className="bg-blue-400 w-1/2 h-60"></div>
          <div className="bg-green-400 w-1/2 h-60"></div>
        </nav>

        <nav className="flex mr-6 ml-6 pt-5 gap-4">
          <div className="bg-purple-400 w-1/2 h-60"></div>
          <div className="bg-yellow-400 w-1/2 h-60"></div>
        </nav>
      </footer>
    </div>
  );
}

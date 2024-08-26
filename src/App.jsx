import React, {useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Aos from "aos";
import TopProducts from "./components/TopProducts/TopProducts";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
    Aos.refresh();
  }, [])
  return <div>
    <Navbar />
    <Hero />
    <Products />
    <TopProducts />
  </div>;
}

export default App;

import React from "react";
import Hero from "./components/hero";
import Footer from "./components/footer";

function App() {
  return (
    <div
      className='min-h-screen bg-cover bg-center'
      style={{
        backgroundImage: `url('https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg')`,
      }}
    >
      <Hero />
      <Footer />
    </div>
  );
}

export default App;

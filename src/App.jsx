import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PortfolioNavbar from "./components/PortfolioNavbar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import MoneyCounter from "./pages/MoneyCounter";
import GetCosts from "./pages/GetCosts";
import PaybackInformation from "./pages/PaybackInformation";

function App() {
  return (
    <section
      className="App min-h-[1080px] text-gray-600 font-poppins bg-cover  bg-gray-200 dark:bg-gradient-to-bl dark:from-martinique-950
  dark:to-cerise-700  dark:bg-no-repeat dark:bg-center dark:bg-cover dark:bg-fixed bg-no-repeat bg-center bg-fixed md:pb-16 w-full lg:flex lg:justify-center"
    >
      <PortfolioNavbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/portfolio" element={<Home />}>
          <Route element={<AboutMe />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/counter" element={<MoneyCounter />} />
        <Route path="/get/cost" element={<GetCosts />} />
        <Route path="/payback" element={<PaybackInformation />} />
      </Routes>
    </section>
  );
}

export default App;

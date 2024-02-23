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
      className="App min-h-[1080px] w-full bg-gray-200 bg-cover  bg-fixed bg-center bg-no-repeat
  font-poppins  text-gray-600 dark:bg-gradient-to-bl dark:from-martinique-950 dark:to-cerise-700 dark:bg-cover dark:bg-fixed dark:bg-center dark:bg-no-repeat md:pb-16 lg:flex lg:justify-center"
    >
      <PortfolioNavbar />
      <Routes>
        <Route path="/" element={<Home />}>
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

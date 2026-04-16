import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import DepartmentPage from "./pages/DepartmentPage";
import FacultyPage from "./pages/FacultyPage";
import NotFound from "./pages/NotFound";
function App() {
return (
<Router>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/departments" element={<DepartmentPage />} />
<Route path="/faculty" element={<FacultyPage />} />
<Route path="*" element={<NotFound />} />
</Routes>
<Footer />
</Router>
);
}
export default App;
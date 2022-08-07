import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ekran1 from "./ekranlar/Ekran1";
import Ekran2 from "./ekranlar/Ekran2";
import Bulunamadi from "./ekranlar/Bulunamadi";
import AnaEkran from "./ekranlar/AnaEkran";
import Header from "./Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <section>
          <p>İçerik bölgesi</p>

          <Routes>
            <Route path="/" element={<AnaEkran />} />
            <Route path="/ekran1" element={<Ekran1 />} />
            <Route path="/ekran2" element={<Ekran2 />} />
            <Route path="*" element={<Bulunamadi />} />
          </Routes>

        </section>

        <footer>
          <p>Ben alt bölgeyim</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;

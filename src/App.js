import Home from './pages/Home';
import 'normalize.css';
import styles from './scss/app.module.scss';
import Header from './components/Header';
import Popup from './components/Popup';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Services from './pages/Services';
import Logos from './pages/Logos';
import Retouching from './pages/Retouching';
import Sturmgraf from './pages/Sturmgraf';
import LogoVideoMaker from './pages/LogoVideoMaker';

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <div className={styles.main_wrapper}>
      {/* {opened && <Popup setOpened={setOpened} opened={opened} />} */}
      <Popup setOpened={setOpened} opened={opened} />
      <Header setOpened={setOpened} opened={opened} />
      <div className={styles.wrapper}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/logos" element={<Logos />} />
          <Route path="/retouching" element={<Retouching />} />
          <Route path="/logos/rabbit" element={<Sturmgraf />} />
          <Route path="/logos/videomaker" element={<LogoVideoMaker />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

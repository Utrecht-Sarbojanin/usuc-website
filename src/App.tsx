import './App.css';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import { themeOptions } from './Theme';
import { CssBaseline } from '@mui/material';
import { Theme } from '@emotion/react';
import { Footer } from './components/Footer';
import { DummyPage } from './components/pages/DummyPage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { Durgotsav2024 } from './components/pages/Durgotsav2024';
import { Sarbojanin } from './components/pages/Sarbojanin';
import { Donation } from './components/pages/Donation';
import { Registration } from './components/pages/Registration';
import { Gallery } from './components/pages/Gallery';

const theme: Theme = createTheme(themeOptions);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dummy" element={<DummyPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/durgotsav2024" element={<Durgotsav2024 />} />
          <Route path="/sarbojanin" element={<Sarbojanin />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/donate" element={<Donation />} />
          {/* <Route path="/event-schedule" element={<Event />} /> */}
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </HashRouter>
      <Footer />
    </ThemeProvider>
  );
};

export default App;

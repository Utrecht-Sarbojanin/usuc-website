import './App.css';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import { themeOptions } from './Theme';
import { CssBaseline } from '@mui/material';
import { Theme } from '@emotion/react';
import { Footer } from './components/Footer';
import { DummyPage } from './components/pages/DummyPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { Durgotsav2023 } from './components/pages/Durgotsav2023';
import { Sarbojanin } from './components/pages/Sarbojanin';
import { Donation } from './components/pages/Donation';
import { Memories } from './components/pages/Memories';
import { Registration } from './components/pages/Registration';

const theme: Theme = createTheme(themeOptions);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/usuc-website" element={<Home />} />
          <Route path="/dummy" element={<DummyPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/durgotsav2023" element={<Durgotsav2023 />} />
          <Route path="/sarbojanin" element={<Sarbojanin />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/donate" element={<Donation />} />
          <Route path="/memories" element={<Memories />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
};

export default App;

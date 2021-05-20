import './App.css';
import LanguageSelector from './components/language-selector/LanguageSelector';
// import MainHeader from './components/MainHeader';
import { Suspense } from 'react';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <LanguageSelector />
      {/* <MainHeader /> */}
      <MainLayout />
    </Suspense>
  );
}

export default App;

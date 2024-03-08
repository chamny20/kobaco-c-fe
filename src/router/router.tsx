import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import { TestChaemin } from '../test/chaemin';
import LandingPage from '../pages/landing/LandingPage';
import TestJungmin from '../test/jungmin';
import { TrendPage } from '../pages/trend/TrendPage';
import ScrollToTop from '../components/ScrollToTop';
import { SearchPage } from '../pages/searchAnalysis/SearchPage';
import { AdvArchivePage } from '../pages/adv-archive/AdvArchivePage';

export const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/trend" element={<TrendPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/adv-archive" element={<AdvArchivePage />} />

          {/* test */}
          <Route path="/test" element={<TestChaemin />} />
          <Route path="/jj" element={<TestJungmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

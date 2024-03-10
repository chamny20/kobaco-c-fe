import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import { TestChaemin } from '../test/chaemin';
import LandingPage from '../pages/landing/LandingPage';
import TestJungmin from '../test/jungmin';
import { TrendPage } from '../pages/trend/TrendPage';
import ScrollToTop from '../components/ScrollToTop';
import { SearchPage } from '../pages/searchAnalysis/SearchPage';
import { AdvArchivePage } from '../pages/adv-archive/AdvArchivePage';

import { SearchChartPage } from '../pages/chart/SearchChart';

import { AdvDetailPage } from '../pages/adv-detail/AdvDetailPage';
import { ScrapPage } from '../pages/scrap/ScrapPage';

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

          <Route path="/search-chart" element={<SearchChartPage />} />

          <Route
            path="/adv-archive/:advertisementId"
            element={<AdvDetailPage />}
          />
          <Route path="/adv-scrap" element={<ScrapPage />} />

          {/* test */}
          <Route path="/test" element={<TestChaemin />} />
          <Route path="/jj" element={<TestJungmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

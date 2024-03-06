import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import { TestChaemin } from '../test/chaemin';
import LandingPage from '../pages/landing/LandingPage';
import TestJungmin from '../test/jungmin';
import { TrendPage } from '../pages/trend/TrendPage';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/trend" element={<TrendPage />} />

          {/* test */}
          <Route path="/test" element={<TestChaemin />} />
          <Route path="/jj" element={<TestJungmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import { TestChaemin } from '../test/chaemin';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<TestChaemin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

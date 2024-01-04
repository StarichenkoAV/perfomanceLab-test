import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { MainLayout } from "./components/layouts/MainLayout";
import "./App.module.scss";

const HomePage = React.lazy(() =>
  import("./components/pages/HomePage").then(({ HomePage }) => ({
    default: HomePage,
  }))
);
const NotFoundPage = React.lazy(() =>
  import("./components/pages/NotFoundPage").then(({ NotFoundPage }) => ({
    default: NotFoundPage,
  }))
);
const ItemPage = React.lazy(() =>
  import("./components/pages/ItemPage").then(({ ItemPage }) => ({
    default: ItemPage,
  }))
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<HomePage />} />
        <Route
          path="item/:id"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <ItemPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;

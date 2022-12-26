import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "src/components/layout";
import { Report } from "src/pages/report";

export const Body: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Report />} />
      </Routes>
    </Layout>
  );
};

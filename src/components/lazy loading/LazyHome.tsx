import React, { lazy, Suspense, useState } from "react";

const AboutLazy = lazy(() => import("../lazy loading/LazyLoading01"));

export const HomeLazy: React.FC = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const handleShow = () => setSuccess((prev) => !prev);
  return (
    <div>
      <h1>Home Lazy</h1>
      <button onClick={handleShow} className="cursor-pointer">
        Click to show lazy loading about
      </button>
      {success ? (
        <Suspense fallback={<div>Loading page....</div>}>
          <AboutLazy />
        </Suspense>
      ) : (
        <div>I am shamnad s</div>
      )}
    </div>
  );
};

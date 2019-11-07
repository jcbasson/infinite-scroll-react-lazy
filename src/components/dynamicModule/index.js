import React, { Suspense, lazy } from "react";
import { ErrorBoundary } from "../errorBoundary";

export const DynamicModule = ({ placeholder, component }) => {
  const LazyComponent = lazy(component);
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={placeholder}>
          <LazyComponent></LazyComponent>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

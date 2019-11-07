import React, { Suspense } from "react";
import { ErrorBoundary } from "../errorBoundary";

export const DynamicModule = ({ placeholder, component }) => {
  return (
    <>
      <ErrorBoundary fallback={<h2>Error!</h2>}>
        <Suspense fallback={placeholder}>{component()}</Suspense>
      </ErrorBoundary>
    </>
  );
};

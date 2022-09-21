import { Layout } from "../../components/Layout/Layout";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import BasketContainer from "../../containers/Basket/Basket";
import React from "react";

interface BasketPage {
  className: string;
}

export const BasketPage: React.FC<BasketPage> = ({ className }) => {
  return (
    <Layout>
      <ErrorBoundary>
        <BasketContainer className={className} />
      </ErrorBoundary>
    </Layout>
  );
};

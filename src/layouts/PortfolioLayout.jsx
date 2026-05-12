import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import CustomCursor from "../components/CustomCursor";
import LoadingScreen from "../components/LoadingScreen";
import { usePortfolio } from "../context/PortfolioContext";

const PortfolioLayout = () => {
  const [loading, setLoading] = useState(true);
  const { data } = usePortfolio();

  return (
    <HelmetProvider>
      <Helmet>
        <title>{data.profile.name} | {data.profile.roles[0]}</title>
        <meta name="description" content={data.profile.intro} />
        <meta property="og:title" content={`${data.profile.name} Portfolio`} />
        <meta property="og:description" content={data.profile.intro} />
      </Helmet>

      {/* Futuristic Cursor */}
      <CustomCursor />

      {/* Loading Screen */}
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <div className="relative w-full min-h-screen bg-bg-light dark:bg-bg-dark text-text-primary dark:text-text-primary transition-colors duration-300">
          {/* Navbar Placeholder */}
          {/* <Navbar /> */}
          
          <main>
            <Outlet />
          </main>

          {/* Footer Placeholder */}
          {/* <Footer /> */}
        </div>
      )}
    </HelmetProvider>
  );
};

export default PortfolioLayout;

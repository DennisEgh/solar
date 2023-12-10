// Import React
import React, { ReactNode } from 'react';

// Define the prop types
interface RootLayoutProps {
  children: ReactNode;
}

// Component
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

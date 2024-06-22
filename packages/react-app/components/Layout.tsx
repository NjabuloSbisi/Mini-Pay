import { FC, ReactNode } from "react";
import Masthead from "./Masthead"; 

interface Props {
  children: ReactNode;
  backgroundColor?: string; 
  contentAreaBackgroundColor?: string; 
  className?: string; 
}

const Layout: FC<Props> = ({ children, backgroundColor, contentAreaBackgroundColor, className }) => {
  return (
    <>
      <div
        className={`layout ${backgroundColor ? `bg-${backgroundColor}` : ''} overflow-hidden flex flex-col min-h-screen ${className}`}
      >
        <Masthead />
        <main className={`content-area py-16 max-w-7xl mx-auto space-y-8 sm:px-6 lg:px-8 ${contentAreaBackgroundColor ? `bg-${contentAreaBackgroundColor}` : ''}`}>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;


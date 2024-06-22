import { FC, ReactNode } from "react";
import Header from "./Header"; 

interface Props {
  children: ReactNode;
  backgroundColor?: string;
  contentAreaBackgroundColor?: string; 
}

const Layout: FC<Props> = ({ children, backgroundColor, contentAreaBackgroundColor }) => {
  return (
    <>
      <div
        className={`layout ${backgroundColor ? `bg-${backgroundColor}` : 'bg-unique-blue'} overflow-hidden flex flex-col min-h-screen`}
      >
        <Header />
        <main
          className={`content-area py-16 max-w-7xl mx-auto space-y-8 sm:px-6 lg:px-8 bg-pink-500 ${
            contentAreaBackgroundColor ? `bg-${contentAreaBackgroundColor}` : ''
          }`}
          
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;


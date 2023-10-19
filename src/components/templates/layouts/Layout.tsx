import { ReactNode } from "react";
import Head from "next/head";

interface LayoutProps {
  children?: ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <div>
      <Head>
        <title>{title ? `${title} | Your App Name` : "Your App Name"}</title>
        <meta
          name="description"
          content={description || "Your default description"}
        />
      </Head>

      <header>{/* Você pode colocar o navbar aqui */}</header>

      <section>{children}</section>

      <footer>{/* Você pode colocar o footer aqui */}</footer>
    </div>
  );
};

export default Layout;

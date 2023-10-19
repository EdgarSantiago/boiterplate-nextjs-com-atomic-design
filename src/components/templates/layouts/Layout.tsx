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
        <title>{title ? `${title} | Nome do app` : "Nome do app"}</title>
        <meta name="description" content={description || "Descrição padrão"} />
      </Head>

      <header>{/* Você pode colocar o navbar aqui */}</header>

      <section>{children}</section>

      <footer>{/* Você pode colocar o footer aqui */}</footer>
    </div>
  );
};

export default Layout;

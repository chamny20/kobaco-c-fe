import Footer from './Footer';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;

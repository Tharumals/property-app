import "@/assets/styles/global.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";

export const metadata = {
  title: "Property App",
  keyword: "rental, property, rent estate",
};
const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;

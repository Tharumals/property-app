import "@/assets/styles/global.css";
import AuthProvider from "@/components/AuthProvider";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";

export const metadata = {
  title: "Property App",
  keyword: "rental, property, rent estate",
};
const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;

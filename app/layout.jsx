import "@/assets/styles/global.css";

export const metadata = {
  title: "Property App",
  keyword: "rental, property, rent estate",
};
const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;

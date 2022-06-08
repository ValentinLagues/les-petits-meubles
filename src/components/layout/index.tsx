import { ReactNode } from "react";
import FooterComponent from "./footer";
import NavbarComponent from "./navbar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div>
      <NavbarComponent />
      <div>{children}</div>
      <FooterComponent />
    </div>
  );
};

export default Layout;

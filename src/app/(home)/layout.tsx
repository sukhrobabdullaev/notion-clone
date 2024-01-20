import { ChildProps } from "../../../types";
import Navbar from "./components/navbar";

const HomeLayout = ({ children }: ChildProps) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default HomeLayout;

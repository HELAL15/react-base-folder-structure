import { FC, memo,  } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const Layout: FC<IProps> = ({  }) => {

  return (
    <>

    <Header/>
      <main>
        <Outlet/>
      </main>
    <Footer/>

    </>
  );
}

export default memo(Layout);

import { Fragment } from "react";
import { Link } from "react-router-dom";

const Layout = ({children}) => {
  return (
    <Fragment>
      <header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <div>
        {children}
      </div>
    </Fragment>
  )
};

export default Layout;
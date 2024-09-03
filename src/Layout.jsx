import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <Navbar />
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`contacts/1`}>Gina</Link>
            </li>
            <li>
              <Link to={`contacts/2`}>Sirila</Link>
            </li>
            <li>
              <Link to={`contacts/3`}>Mitsu</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

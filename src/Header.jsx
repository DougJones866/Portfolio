import "./Header.css";

export default function Header() {
  return (
    <>
    <div className="container">
      <nav>
        <h2 className="logo">Douglas Jones</h2>

        <ul className="navigation-items">
          <li className="navigation-item">
            <a href="#projects">About</a>
          </li>
          <li className="navigation-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="navigation-item">
            <a href="#projects">Skills</a>
          </li>
          <li className="navigation-item">
            <a href="#projects">Contact</a>
          </li>
        </ul>
      </nav>
      </div>
    </>
  );
}

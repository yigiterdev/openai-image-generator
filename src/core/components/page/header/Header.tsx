import "./_header.scss";

import GitHubIcon from "../../icons/GitHubIcon";
import AppIcon from "../../icons/AppIcon";
import {Link} from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <Link className="header__brand" to={"/"}>
          <AppIcon />

          <p>AI Image Generator</p>
        </Link>

        <a
          href="https://github.com/yigiterdev/openai-image-generator"
          target="_blank"
          rel="noreferrer">
          <GitHubIcon />
        </a>
      </div>
    </header>
  );
}

export default Header;

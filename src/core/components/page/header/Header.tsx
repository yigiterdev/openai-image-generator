import "./_header.scss";

import GitHubIcon from "../../icons/GitHubIcon";
import AppIcon from "../../icons/AppIcon";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__brand">
          <AppIcon />

          <p>AI Image Generator</p>
        </div>

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

import "./_header.scss";

import GitHubIcon from "../../icons/GitHubIcon";
import AppIcon from "../../icons/AppIcon";

function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <AppIcon />

        <p>AI Image Generator</p>
      </div>

      <GitHubIcon />
    </header>
  );
}

export default Header;

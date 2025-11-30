import Link from "next/link";


function Header() {
    return<header className={css.header}>
  <link href="/" aria-label="Home">
    NoteHub
  </link>
  <nav aria-label="Main Navigation">
    <ul className={css.navigation}>
      <li>
        <link href="/">Home</link>
      </li>
      <li>
        <link href="/notes">Notes</link>
      </li>
    </ul>
  </nav>
</header>

}
export default Header;
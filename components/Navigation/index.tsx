import Link from 'next/link'

const Navigation = () => (
  <nav>
    <Link href="/">
      <span>LOGO</span>
    </Link>
    <ul>
      <li>
        <Link href="/">
          <a>Strona główna</a>
        </Link>
      </li>
      <li>
        <Link href="/artykuly">
          <a>Aktualności</a>
        </Link>
      </li>
      <li>
        <Link href="/porady">
          <a>Moto porady</a>
        </Link>
      </li>
      <li>
        <Link href="/ogloszenia">
          <a>Perełki z ogłoszeń</a>
        </Link>
      </li>
      <li>
        <Link href="/kontakt">
          <a>Kontakt</a>
        </Link>
      </li>
    </ul>
    <button type="button">Change theme mode</button>
  </nav>
)

export default Navigation

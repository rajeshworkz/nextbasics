import Link from 'next/link';
const Header = () => (
  <div>

    <Link href='/'>
    <a>home page</a>
    </Link>

    <Link href='/about'>
    <a>About page</a>
    </Link>


    <Link href='/cv'>
    <a>cv page</a>
    </Link>


    <Link href='/portfolios'>
    <a>portfolio page</a>
    </Link>
  </div>
)

export default Header

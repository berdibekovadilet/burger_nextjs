import Link from "next/link";
import { GiHamburger } from "react-icons/gi";

const Header = () => {
  return (
    <header>
      <div>
        <GiHamburger />
      </div>
      <nav>
        <Link href="/">
          <a>Главная</a>
        </Link>
        <Link href="/burgers">
          <a>Бургеры</a>
        </Link>
        <Link href="/about">
          <a>О нас</a>
        </Link>
        <Link href="/review">
          <a>Отзывы</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

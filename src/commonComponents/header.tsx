import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex justify-between p-4">
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/performance" className="mr-4">
          Performance
        </Link>
        <Link href="/reliability" className="mr-4">
          Reliability
        </Link>
        <Link href="/scale" className="mr-4">
          Scale
        </Link>
      </div>
    </nav>
  );
};

export default Header;

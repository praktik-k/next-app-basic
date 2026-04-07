import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <Link href={"/"}>main</Link>
      </div>
      <div>
        <Link href={"/about"}>about</Link>
      </div>
      <div>
        <Link href={"/posts"}>posts</Link>
      </div>
    </header>
  );
}
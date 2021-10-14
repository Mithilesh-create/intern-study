import Link from "next/link";
function index() {
  return (
    <>
      <h1>This is a News Page</h1>
      <ul>
        <li>
          <Link href="/next-news">Next News</Link>
        </li>
        <li>Some Other Stuff</li>
      </ul>
    </>
  );
}

export default index;

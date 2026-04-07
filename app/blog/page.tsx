import Link from "next/link";

export default async function Blog() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await data.json()

  interface ItemPost {
    userId: number,
    id: number,
    title: string,
  }

  return (
    <>
      <h1>
        BLOG page
      </h1>

      {
        posts.map( ( item: ItemPost ) => {
          return <div key={item.id} ><Link href={`/blog/${item.id}`}>{item.title}</Link></div>
        })
      }
    </>
  );
}

import Link from "next/link";

interface ItemPost {
  userId: number,
  id: number,
  title: string,
}

const getData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')

  // test working custom error component <Error/>
  // throw new Error('test error!!!')

  return data.json()
}

export default async function Posts() {
  const posts = await getData()


  return (
    <>
      <h1>
        BLOG page
      </h1>

      {
        posts.map( ( item: ItemPost ) => {
          return <div key={item.id} ><Link href={`/posts/${item.id}`}>{item.title}</Link></div>
        })
      }
    </>
  );
}

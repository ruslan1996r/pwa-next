export default function Home({ users }) {
  return (
    <div>
      <ul>
        {users.map(el => {
          return <li key={el.id}>{el.name}</li>
        })}
      </ul>
    </div >
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const articles = await res.json()

  return {
    props: {
      users: articles,
    },
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }

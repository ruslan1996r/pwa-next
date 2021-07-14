import React from 'react'
import { useRouter } from "next/router"
import styles from "../../styles/user.module.scss"
import MainContainer from '../../components/MainContainer'

function User({ user }) {
  const { query } = useRouter()
  return (
    <MainContainer keywords={user.name}>
      <div className={styles.user}>
        <h1>User {query.id}</h1>
        <h3>Имя юзера: {user.name}</h3>
      </div>
    </MainContainer>
  )
}

export default User

// Для динамических путей можно использовать это или же getStaticPath
export async function getServerSideProps({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await response.json()

  return {
    props: {
      user
    },
  }
}
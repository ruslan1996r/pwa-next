import Head from "next/head";
import React from 'react'

import A from "./A";

// Это что-то вроде ОБЁРТКИ или же Layouts, которые я юзал во VUE
/**
 * @param {Component} children - любой Реактовский компонент, который сюда попадёт
 */
function MainContainer({ children, keywords }) {
  return (
    <div>
      {/* ТАК ДОБАВЛЯЮТСЯ МЕТА-ТЕГИ */}
      <Head>
        <meta keywords={"test, tag, hello, vova" + keywords || "default"}></meta>
        <title>Main page</title>
      </Head>
      <div className="navbar">
        <A href={'/'} text='Главная' />
        <A href={'/users'} text='Пользователи' />
      </div>
      <div>
        {children}
      </div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }

          .link {
            text-decoration: none;
            color: white;
            font-size: 20px;
            margin: 10px;
          }
        `}
      </style>
    </div>
  )
}

export default MainContainer

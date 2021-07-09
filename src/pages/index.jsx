import React from "react";
import Head from "next/head";
import classes from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";

export default function Index(props) {
  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {props.isShow ? <h1>{props.count}</h1> : null}
      <button onClick={props.handleClick}>button</button>
      <button onClick={props.handleDisplay}>{props.isShow ? "非表示" : "表示"}</button>
      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>add</button>
      <ul>
        {props.array.map((item) => {
          return <li key={item.id}>{item}</li>;
        })}
      </ul>
      <Main page="index" />
      <Footer />
    </div>
  );
}

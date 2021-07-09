import React from "react";
import classes from "src/components/Headline/Headline.module.css";

export function Headline(props) {
  return (
    <div>
      <h1 className={classes.title}>
        <a href="https://nextjs.org">{props.title} Page! </a>
      </h1>
      <p className={classes.description}>the length of items {props.children}</p>
      <button onClick= {props.handleReduce}>reduce</button>
    </div>
  );
}

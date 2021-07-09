import Link from "next/link";
import React from "react";
import classes from "src/components/Header/Header.module.css";

export function Header() {
  const NAV_ITEMS = [
    { href: "/", label: "Index" },
    { href: "/about", label: "About" },
  ];
  return (
    <div className={classes.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link href={item.href} key={item.id}>
            <a className={classes.anchor}>{item.label}</a>
          </Link>
        );
      })}
    </div>
  );
}

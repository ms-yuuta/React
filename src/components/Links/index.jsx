import classes from "src/components/Links/Links.module.css";

export function Links({ items }) {
  return (
    <div className={classes.grid}>
      {items.map((item, index) => {
        return (
          <a href={item.href} className={classes.card} key={index}>
            <h3 className={classes.title}>{item.title} &rarr;</h3>
            <p className={classes.description}>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}

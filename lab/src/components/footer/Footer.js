import Components from "../../assets/images/Components.png";
import Declarative from "../../assets/images/Declarative.png";
import SingleWay from "../../assets/images/SingleWay.png";
import JSX from "../../assets/images/JSX.png";
import style from "../footer/style.module.css";

export function Footer() {
  const componentsAlt = "components image";
  const declarativeAlt = "declarative image";
  const singleWayAlt = "Single-way image";
  const jsxAlt = "JSX image";
  return (
    <>
      <footer className={style.footer}>
        <div className={style.div}>
          <img src={Declarative} alt={declarativeAlt} />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className={style.div}>
          <img src={Components} alt={componentsAlt} />
          <h2>Componentes</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className={style.div}>
          <img src={SingleWay} alt={singleWayAlt} />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the componente's.</p>
        </div>
        <div className={style.div}>
          <img src={JSX} alt={jsxAlt} />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </footer>
    </>
  );
}

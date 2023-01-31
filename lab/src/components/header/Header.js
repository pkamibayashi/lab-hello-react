import ironhacklogo from "../../assets/images/ironhack.png";
import pancake from "../../assets/images/menupancake.png";
import style from "../header/style.module.css";

export function Header() {
  const altLogo = "Logo Ironhack";
  const altMenu = "Pancake menu";
  return (
    <>
      <div className={style.corpo}>
        <nav className={style.nav}>
          <img src={ironhacklogo} alt={altLogo} />
          <img src={pancake} alt={altMenu} />
        </nav>
        <main className={style.main}>
          <h1 className={style.h1}>Say Hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja Developer
          </p>
          <button>Awesome!</button>
        </main>
      </div>
    </>
  );
}

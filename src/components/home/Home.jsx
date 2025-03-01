import React from "react";
import scss from "./home.module.scss";
import img from "../../img/LiDrUvf3elZH0NyW9jc4n.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="container">
        <div className={scss.main}>
          <h1>Welcome</h1>
          <div className={scss.content}>
            <h2>Математические Головоломки: Разбуди свой Мозг!</h2>
            <p>Увлекательные задачи для развития математического мышления.</p>
          </div>
          <div className={scss.block}>
            <img src={img} alt="img" />
          </div>
          <div className={scss.btns}>
            <button className={scss.btn1} onClick={() => navigate("/plus")}>
              plus
            </button>
            <button className={scss.btn1} onClick={() => navigate("/")}>
              home
            </button>
            <button
              className={scss.btn3}
              onClick={() => navigate("/multiplications")}
            >
              multiplications
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

// export default function NavigationButtons() {
//

//
// }

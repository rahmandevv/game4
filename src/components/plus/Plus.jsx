import React from "react";
import scss from "./plus.module.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Plus = () => {
  const navigate = useNavigate();

  const [firstNum, setFirstNum] = useState(1);
  const [secondNum, setSecondNum] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [answerCount, setAnswerCount] = useState(0);
  const [message, setMessage] = useState("");
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    generateNewNumbers();
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev > 0) return prev - 1;
        clearInterval(interval);
        alert("Время вышло");
        return 0;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const generateNewNumbers = () => {
    setFirstNum(Math.floor(Math.random() * 100) + 1);
    setSecondNum(Math.floor(Math.random() * 100) + 1);
  };

  const handleSubmit = () => {
    if (parseInt(inputValue) === firstNum + secondNum) {
      setMessage("true");
      setAnswerCount(answerCount + 1);
      generateNewNumbers();
    } else {
      setMessage("false");
      setTimer((prev) => Math.max(prev - 5, 0));
    }
    setInputValue("");
  };

  return (
    <section className={scss.game}>
      <div className="container">
        <div className={scss.main}>
          <div className={scss.block}>
            <h1 className={scss.title}>Решите пример</h1>
            <p className={scss.question}>
              {firstNum} + {secondNum}
            </p>
            <div className={scss.btns}>
              <input
                type="number"
                className={scss.input}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit();
                  }
                }}
              />
              <button className={scss.btn} onClick={handleSubmit}>
                Текшерүү
              </button>
            </div>
            <p className={scss.message}>{message}</p>
            <p className={scss.score}>Жооптор: {answerCount}</p>
            <p className={scss.timer}>Таймер: {timer} сек</p>
          </div>
          <div className="btns">
            <button className="btn1" onClick={() => navigate("/plus")}>
              plus
            </button>
            <button className="btn2" onClick={() => navigate("/")}>
              home
            </button>
            <button
              className="btn3"
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

export default Plus;

import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timerId = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
        // Добавить очистку таймера
        clearTimeout(timerId);
        // Добавить console.log аналогичного метода!
        console.log(count);
    }
  });

  // Без параметров
  useEffect(() => {
    // выполнится на каждый рендер
    console.log("render");
    // Добавить console.log аналогичного метода!
  });

  // Пустой массив
  useEffect(() => {
    let arr = [];
    // Выполнится только на первый рендер
    // Добавить console.log аналогичного метода!
    console.log("render_arr");
  }, []);
  
  // Массив зависимостей
  const [prop, setProp] = useState(0);
  function increment() {
    setProp(prop + 1);
  };
  function decrement() {
    setProp(prop - 1);
  };
  useEffect(() => {
    // Выполнится  на первый рендер
    // И на любые изменение зависимостей - здесь переменные props (Оставил только props, потому что не знал как лучше показать зависимость)
    // Добавить console.log аналогичного метода!
    console.log("render_prop")
   }, 
[prop]
);



  return (
  <div>

  <h1>I've rendered {count} times!</h1>
  <h1>{prop}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
  </div>

  );
}

export default Timer;

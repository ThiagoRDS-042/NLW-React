import { useState } from "react";

// type ButtonProps = {
//   text?: string;
//   children?: string;
// };

// export function Button(props: ButtonProps) {
//   // passando um valor padrão
//   return (
//     <>
//       <button>{props.text || "Property Default"}</button>
//       <button>{props.children || "Children Default"}</button>
//     </>
//   );
// }

export function Button() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return <button onClick={increment}>{counter}</button>;
}

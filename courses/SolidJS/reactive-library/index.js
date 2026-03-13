import { createSignal, createEffect, createMemo } from 'solid';

const [count, setCount] = createSignal(0);
const doubleCount = () => count() * 2;
const isDivisibleByThree = createMemo(() => count() % 3 === 0);

document.querySelector('button').addEventListener('click', () => {
  setCount((c) => c + 1);
});

createEffect(() => {
  console.log(count());
});

createEffect(() => {
  document.querySelector('#count').textContent = count();
});

createEffect(() => {
  document.querySelector('#double').textContent = doubleCount();
});

createEffect(() => {
  document.querySelector('#divisibleByThree').textContent =
    isDivisibleByThree();
});

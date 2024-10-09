import React, { useState, useEffect } from 'react';
import { LisiniH1 } from './Lisini.style';

export default function Lisini() {
  const words = ["idk i'm good at languages"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length) {
      return;
    }

    if (subIndex === words[index].length + 1 && index !== words.length - 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1500 : 150, Math.random() * 350));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 600);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return <LisiniH1>{`${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`}</LisiniH1>;
}

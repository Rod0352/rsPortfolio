import * as React from "react";

export const slowLetterReveal = (
  text: string,
  hook: React.Dispatch<React.SetStateAction<string | number>>,
  speed?: number
) => {
  for (let i = 0; i < text.length; i++) {
    setTimeout(
      () => {
        //if theres a comma,put a space after it
        if (text[i] === ",") {
          hook(text.slice(0, i + 1) + " ");
          return;
        }
        hook(text.slice(0, i + 1));
      },
      speed ? speed * i : 90 * i
    );
  }
};

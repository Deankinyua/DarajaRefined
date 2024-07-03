import { useEffect } from "react";

const TypeWriter = () => {
  useEffect(() => {
    const el = document.querySelector(".typewriter")!;

    const phrases = ["Partners"];

    let cursorPhraseIndex = 0;

    const sleepTime = 100;

    function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const writeLoop = async () => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const cursorWord = phrases[cursorPhraseIndex];

        for (let i = 0; i < cursorWord.length; i++) {
          el.textContent = cursorWord.substring(0, i + 1);
          await sleep(sleepTime);
        }

        await sleep(sleepTime * 6);

        for (let i = cursorWord.length; i > 0; i--) {
          el.textContent = cursorWord.substring(0, i - 1);
          await sleep(sleepTime);
        }

        await sleep(sleepTime * 6);

        if (cursorPhraseIndex === phrases.length - 1) {
          cursorPhraseIndex = 0;
        } else {
          cursorPhraseIndex += 1;
        }
      }
    };
    writeLoop();
  }, []);
  return (
    <div className="text-center mt-3">
      <h1 className="text-4xl font-bold tracking-tight typewriter"></h1>
    </div>
  );
};

export default TypeWriter;

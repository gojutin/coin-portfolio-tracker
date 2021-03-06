import { useRef, useEffect } from "react";
import { toUsd } from "utils";

export type HeaderProps = {
  total: number;
};

function getTotalColor(previousTotal, currentTotal) {
  if (previousTotal > currentTotal) {
    return "text-red-500";
  } else if (previousTotal < currentTotal) {
    return "text-green-500";
  } else {
    return "text-gray-800 dark:text-white";
  }
}

export const Header = (props: HeaderProps) => {
  const { total } = props;
  const previousTotal = useRef<number>(total);

  useEffect(() => {
    setTimeout(() => {
      previousTotal.current = total;
    }, 500);
  }, [total]);

  const color = getTotalColor(previousTotal.current, total);

  return (
    <header className="p-4 mb-8 text-center sticky top-0 flex items-center justify-center bg-gray-500/10 dark:bg-gray-900/80 backdrop-filter backdrop-blur-md">
      {/* <img src="/coinster-icon.svg" className="h-12 w-12" alt="Coinster" /> */}
      <h1
        className={`${color} text-5xl font-medium transition-colors duration-200`}
      >
        {toUsd(total)}
      </h1>
    </header>
  );
};

import { useEffect } from "react";

export default function useKeyPress(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callback);
      () => document.removeEventListener("keydown", callback);
    },
    [key, action]
  );
}

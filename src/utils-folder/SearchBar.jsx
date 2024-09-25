import { useRef, useState } from "react";
import useKeyPress from "../custom-hooks/useKeyPress";

export default function SearchBar({ query, setQuery }) {
  const [hasTyped, setHasTyped] = useState(false);

  const handleInputChange = (e) => {
    setHasTyped(true); // Indicate that the user has started typing
    setQuery(e.target.value); // Update the query
  };

  const inputEl = useRef(null);

  useKeyPress("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  // useEffect(
  //   function () {
  //     function callback(e) {
  //       if (document.activeElement === inputEl.current) return;

  //       if (e.code === "Enter") {
  //         inputEl.current.focus();
  //         setQuery("");
  //       }
  //     }

  //     document.addEventListener("keydown", callback);
  //     return () => document.removeEventListener("keydown", callback);
  //   },
  //   [setQuery]
  // );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={hasTyped ? query : ""}
      onChange={handleInputChange}
      ref={inputEl}
    />
  );
}

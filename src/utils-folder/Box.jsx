import { useState } from "react";
import Button from "./Button";

export default function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <Button
        onClick={() => setIsOpen((open) => !open)}
        className={"btn-toggle"}
      >
        {isOpen ? "–" : "+"}
      </Button>
      {isOpen && children}
    </div>
  );
}

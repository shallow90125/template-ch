import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";

export const Index: React.FC = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.text())
      .then(setText);
  }, []);

  return (
    <div className="grid h-dvh place-content-center place-items-center gap-4">
      <div className="flex items-center">
        <Button size="icon" onClick={() => setCount(count - 1)}>
          <MinusIcon />
        </Button>
        <div className="w-10 text-center">{count}</div>
        <Button size="icon" onClick={() => setCount(count + 1)}>
          <PlusIcon />
        </Button>
      </div>
      <div>/api: {text}</div>
    </div>
  );
};

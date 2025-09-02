import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import type React from "react";
import { useState } from "react";

export const Index: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-dvh place-content-center place-items-center">
      <Button size="icon" onClick={() => setCount(count - 1)}>
        <MinusIcon />
      </Button>
      <div className="w-10 text-center">{count}</div>
      <Button size="icon" onClick={() => setCount(count + 1)}>
        <PlusIcon />
      </Button>
    </div>
  );
};

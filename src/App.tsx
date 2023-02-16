import { useVirtualizer } from "@tanstack/react-virtual";
import { CSSProperties, useRef } from "react";
import ListItem from "./components/ListItem";
import { randomizedUsers } from "./utils";

function App() {
  const parentRef = useRef<HTMLDivElement | null>(null);

  const count = randomizedUsers.length;

  const virtualizer = useVirtualizer({
    count,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 100,
    overscan: 5,
  });

  const items = virtualizer.getVirtualItems();

  const wrapperStyles: CSSProperties = {
    width: 400,
    height: 400,
    overflowY: "auto",
    padding: "0 0.5rem",
  };

  const parentStyles: CSSProperties = {
    position: "relative",
    width: "100%",
    height: virtualizer.getTotalSize(),
  };

  return (
    <div ref={parentRef} style={wrapperStyles}>
      <div style={parentStyles}>
        {items.map((item) => (
          <ListItem
            virtualizeStyles={{
              position: "absolute",
              width: "100%",
              top: 0,
              left: 0,
              transform: `translateY(${item.start}px)`,
              height: item.size,
            }}
            index={item.index}
            name={randomizedUsers[item.index]}
            key={item.key}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

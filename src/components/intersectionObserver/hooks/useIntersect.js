import { useEffect, useRef, useState } from "react";

export const useIntersect = ({ root = null, rootMargin, threshold = 0 }) => {
  const [entry, updateEntry] = useState({});
  const [node, setNode] = useState(null);

  const observer = useRef(
    new IntersectionObserver(([entry]) => onIntersection(updateEntry, entry), {
      root,
      rootMargin,
      threshold
    })
  );

  const onIntersection = (updateEntry, entry) => {
    if (entry.isIntersecting) {
      updateEntry(entry);
      const { current: currentObserver } = observer;
      currentObserver.disconnect();
    }
  };

  useEffect(() => {
    const { current: currentObserver } = observer;
    currentObserver.disconnect();

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node]);

  return [setNode, entry];
};

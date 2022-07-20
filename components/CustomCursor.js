import { useRef, useEffect } from "react";
import styles from "../styles/components/CustomCursor.module.css";

const CustomCursor = () => {
  const delay = 8;

  const isCursorVisible = useRef(true);
  const isCursorEnlarged = useRef(false);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);

  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(null);

  const square = useRef(null);
  const outline = useRef(null);

  const toggleCursorVisibility = () => {
    if (isCursorVisible.current) {
      square.current.style.opacity = 1;
      outline.current.style.opacity = 1;
    } else {
      square.current.style.opacity = 0;
      outline.current.style.opacity = 0;
    }
  };

  const toggleCursorSize = () => {
    if (isCursorEnlarged.current) {
      square.current.style.transform = "translate(-50%,-50%) scale(0.75)";
      outline.current.style.transform = "translate(-50%,-50%) scale(1.5)";
    } else {
      square.current.style.transform = "translate(-50%,-50%) scale(1)";
      outline.current.style.transform = "translate(-50%,-50%) scale(1)";
    }
  };

  const mouseOverEvent = () => {
    isCursorEnlarged.current = true;
    toggleCursorSize();
  };

  const mouseOutEvent = () => {
    isCursorEnlarged.current = false;
    toggleCursorSize();
  };

  const mouseEnterEvent = () => {
    isCursorVisible.current = true;
    toggleCursorVisibility();
  };

  const mouseLeaveEvent = () => {
    isCursorVisible.current = false;
    toggleCursorVisibility();
  };

  const mouseMoveEvent = (e) => {
    isCursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    square.current.style.top = endY.current + "px";
    square.current.style.left = endX.current + "px";
  };

  const animateOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    outline.current.style.top = _y.current + "px";
    outline.current.style.left = _x.current + "px";

    requestRef.current = requestAnimationFrame(animateOutline);
  };

  useEffect(() => {
    document.addEventListener("mousedown", mouseOverEvent);
    document.addEventListener("mouseup", mouseOutEvent);
    document.addEventListener("mousemove", mouseMoveEvent);
    document.addEventListener("mouseenter", mouseEnterEvent);
    document.addEventListener("mouseleave", mouseLeaveEvent);

    animateOutline();

    return () => {
      document.removeEventListener("mousedown", mouseOverEvent);
      document.removeEventListener("mouseup", mouseOutEvent);
      document.removeEventListener("mousemove", mouseMoveEvent);
      document.removeEventListener("mouseenter", mouseEnterEvent);
      document.removeEventListener("mouseleave", mouseLeaveEvent);

      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div ref={outline} className={styles.outline}></div>
      <div ref={square} className={styles.square}></div>
    </>
  );
};

export default CustomCursor;

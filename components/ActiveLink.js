import { useState } from "react";
import { useRouter } from "next/router";

export default function ActiveLink({ children, href }) {
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();
  const style = {
    marginBottom: 50,
    textDecoration: router.asPath === href ? "line-through" : "none",
    fontWeight: isHovered ? "600" : "300",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
}

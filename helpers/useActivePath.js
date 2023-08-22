import { usePathname } from "next/navigation";

export function useActivePath(path) {
  const pathname = usePathname();

  // console.log(`Path: ${path} : Pathname: ${pathname}`);

  const checkActivePath = (path) => {
    if (path === "/" && pathname !== path) {
      return false;
    }
    return pathname.startsWith(path);
  };

  return checkActivePath;
}

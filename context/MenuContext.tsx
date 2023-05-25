import { useRouter } from "next/router";
import { createContext, FC, useContext, useState, ReactNode, useEffect } from "react";

type MenuContextType = {
  menuIsOpen: boolean;
  handleOpenMenu: () => void;
  handleCloseMenu: () => void;
};

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuContext = createContext<MenuContextType>({
  menuIsOpen: false,
  handleOpenMenu: () => null,
  handleCloseMenu: () => null,
});

export const useMenuContext = () => {
  return useContext(MenuContext);
};

export const MenuProvider: FC<MenuProviderProps> = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (router) {
      setMenuIsOpen(false);
    }
  }, [router]);

  const handleOpenMenu = () => {
    setMenuIsOpen(true);
    if (window !== undefined) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    }
  };
  const handleCloseMenu = () => {
    setMenuIsOpen(false);
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  };

  const value = {
    menuIsOpen,
    handleOpenMenu,
    handleCloseMenu,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

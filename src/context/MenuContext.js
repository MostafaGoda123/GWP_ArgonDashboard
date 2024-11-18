import { createContext, useEffect, useState } from "react";

export let MenuContext = createContext()

export default function MenuContextProvider({children}) {

   const [menu, setMenu] = useState(true);
   const [isMobile, setIsMobile] = useState(false);
   const [hideMenu, setHideMenu] = useState(true);

   useEffect(() => {
      const handleMediaQueryChange = (e) => {
         setIsMobile(e.matches)
      };
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      mediaQuery.addEventListener('change', handleMediaQueryChange);
      setIsMobile(mediaQuery.matches)
      return () => {
         mediaQuery.removeEventListener('change', handleMediaQueryChange);
      };
   }, []);

   return <MenuContext.Provider value={{ menu , setMenu , isMobile , setHideMenu , hideMenu }}>
      {children}
   </MenuContext.Provider>
}


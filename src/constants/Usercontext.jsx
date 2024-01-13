// export default Usercontext;
import { createContext, useState } from "react";
const Usercontext = createContext();
export const UserProvider = ({ children }) => {
  const [filter, setFilter] = useState(false); 
  const [wishList , setWishList] = useState(false)
  const [cart , setCart] = useState(false)
  return (
    <Usercontext.Provider value={{ filter, setFilter ,wishList , setWishList ,cart , setCart}}>
      {children}
    </Usercontext.Provider>
  );
};

export default Usercontext;

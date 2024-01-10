// export default Usercontext;
import { createContext, useState } from "react";
const Usercontext = createContext();
export const UserProvider = ({ children }) => {
  const [filter, setFilter] = useState(false);
  return (
    <Usercontext.Provider value={{ filter, setFilter }}>
      {children}
    </Usercontext.Provider>
  );
};

export default Usercontext;

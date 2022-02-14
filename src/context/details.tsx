import { createContext, useContext, ReactNode, useState } from "react";
import { AppMiner } from "../shared/types/appMiner";

interface DetailsContextData {
  currentApp: AppMiner;
  changeCurrentApp: (app: AppMiner) => void;
}

interface DetailsProviderProps {
  children: ReactNode;
}

const DetailsContext = createContext({} as DetailsContextData);

export function DetailsProvider({ children }: DetailsProviderProps) {
  const [currentApp, setCurrentApp] = useState<AppMiner>({} as AppMiner);

  function changeCurrentApp(app: AppMiner) {
    setCurrentApp(app);
  }

  return (
    <DetailsContext.Provider value={{ currentApp, changeCurrentApp }}>
      {children}
    </DetailsContext.Provider>
  );
}

export const useDetailsContext = () => useContext(DetailsContext);

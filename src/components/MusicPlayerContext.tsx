import { Pause } from "lucide-react";
import { createContext, useContext, useState, ReactNode } from "react";

const MusicContext = createContext([]);

export const useMusicContext = () => useContext(MusicContext);

export function MusicContextProvider(children: ReactNode) {


    const [pause, setPause] = useState<boolean>(false);

    const togglePause = () => {
        if (pause == false) {
            setPause(true);
        } else {
            setPause(false);
        }
    }
    return <MusicContext.Provider value={{ pause, togglePause }}>
        {children}
    </MusicContext.Provider>
}
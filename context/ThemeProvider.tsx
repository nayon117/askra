"use client"

import { createContext, useContext, useEffect, useState } from "react"

interface ThemeContextType {
    mode: string;
    setMode: (mode : string) => void;
}


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}:{children: React.ReactNode}) => {
    const [mode, setMode] = useState('light');

    const handleThemeChange = () =>{
        if(mode === 'dark') {
            setMode('light')
        } else {
            setMode('dark')
        }
    }

    useEffect(() => {
        if(mode === 'dark') {
            document.documentElement.classList.remove('light')
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
            document.documentElement.classList.add('light')
        }
    }, [mode])

    return (
        <ThemeContext.Provider  value={{mode, setMode}}>
            {children}
        </ThemeContext.Provider>
    )

}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}

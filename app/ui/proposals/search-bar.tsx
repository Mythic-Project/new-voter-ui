'use client'

import { useState } from "react"
import {LuFilter, LuSearch} from "react-icons/lu"

export function SearchBar() {
    const [showSearchIcon, setShowSearchIcon] = useState(true);

    const handleChange = (text: string) => {
        if (text.length) {
            setShowSearchIcon(false)
        } else {
            setShowSearchIcon(true)
        }
    }

    return (
        <div className="text-primary-text flex gap-4">
            <div className="relative">
                <input type="text" placeholder={"Search"} className="bg-primary-background
                    placeholder:text-placeholder-shade placeholder:pl-7 p-4 rounded-lg text-sm z-20 
                    placeholder:font-light"
                    onChange={(e) => handleChange(e.target.value)}
                />
                {
                    showSearchIcon &&
                    <LuSearch className="absolute text-placeholder-shade top-[18px] left-5 z-15"/>
                }
            </div>
            <div className="bg-primary-background p-4 rounded-lg">
                <LuFilter className="text-placeholder-shade text-lg" />
            </div>
        </div>
    )
}
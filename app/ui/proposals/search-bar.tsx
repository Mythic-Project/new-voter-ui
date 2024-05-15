'use client'

import { RealmMetaType } from "@/app/hooks/useRealm";
import { useDaoMeta } from "@/app/providers/dao-provider";
import { useState } from "react"
import {LuFilter, LuSearch} from "react-icons/lu"

export function SearchBar() {
    const daoMeta = useDaoMeta() as RealmMetaType
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
                <input type="text" placeholder={"Search"} className="
                    placeholder:text-placeholder-shade placeholder:pl-7 p-4 rounded-lg text-sm z-20 
                    placeholder:font-light"
                    style={{backgroundColor: daoMeta.primaryBackground}}
                    onChange={(e) => handleChange(e.target.value)}
                />
                {
                    showSearchIcon &&
                    <LuSearch className="absolute text-placeholder-shade top-[18px] left-5 z-15"/>
                }
            </div>
            <div className="p-4 rounded-lg" style={{backgroundColor: daoMeta.primaryBackground}}>
                <LuFilter className="text-placeholder-shade text-lg" />
            </div>
        </div>
    )
}
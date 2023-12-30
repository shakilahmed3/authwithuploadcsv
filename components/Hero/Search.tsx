import React from "react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "../icons";

export default function Search() {
    return (
        <div className="h-[100%] min-h-[50vh]">
            <div className="pr-10 ps-10 pt-[15vh] w-[100%] max-w-[600px] m-auto">
                <Input
                    placeholder="Search..."
                    startContent={
                        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    type="Search"
                />
            </div>
        </div>
    );
}

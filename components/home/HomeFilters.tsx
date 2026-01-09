"use client";
import { HomePageFilters } from "@/constants/filter";
import { Button } from "../ui/button";

const HomeFilters = () => {
    const active = 'newest'
    return (
        <div className="mt-10 flex-wrap hidden gap-3 md:flex">
                {HomePageFilters.map((item) => (
                    <Button key={item.value} onClick={()=>{}}
                    className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${active === item.value  ? 'bg-primary-100 text-white' : 'bg-light-800 text-light-500' }`}
                    >
                        {item.name}
                    </Button>
                ))}
        </div>
    )
}
export default HomeFilters;

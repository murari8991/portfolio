import { useState } from "react";
import './App.scss';
import { MdKeyboardArrowDown } from "react-icons/md";


export default function ExpandableCard({sub1, sub2, title, desc}) {
    const [open, setOpen] = useState(false);
    
    return (
        <div class="content-card">
            <button onClick={() => setOpen(!open)} aria-expanded={open} class="w-full flex">
                <div class={`flex w-full justify-between mx-4 mt-4 ${open ? "" : "mb-4"}`}>
                    <div class="flex flex-col items-start">
                        <p class="font-semibold text-left text-lg">{sub1}</p>
                        <h2 class="text-3xl text-left md:text-5xl font-bold">{title}</h2>
                        <p class="mt-1 text-lg text-left">{sub2}</p>
                    </div>
                    <div class="flex flex-col justify-center">
                        <MdKeyboardArrowDown class={`size-6 card-arrow ${open ? "card-arrow--open" : ""}`}/>
                    </div>
                </div>
            </button>
            {open && (
                <div className="m-4">
                <hr />
                <p className="text-lg font-semibold mt-4">{desc}</p>
                </div>
            )}
        </div>
    )
}
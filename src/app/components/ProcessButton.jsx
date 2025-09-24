"use client"
import home from "@/datas/home.json"

export default function ProcessButton({ onClick }) {
    const { index } = home

    return (
        <div className="flex w-full justify-end items-center gap-5 p-5">
            <span>{index.informationTxt}</span>
            <button
                onClick={onClick}
                className="w-[50px] h-[50px] rounded-lg bg-main flex justify-center items-center
                   hover:bg-gradient-to-r hover:from-cta-from hover:to-cta-to"
                aria-label="Bouton vers la page process"
            >
                <img src="/assets/cross.svg" alt="logo de croix" className="size-5" />
            </button>
        </div>
    )
}
'use client'

import home from "@/datas/home.json"
import ProcessButton from "@/components/ProcessButton";
import s from "./form.module.css"
import FromBody from "@/components/FromBody";

export default function Form({onOpenModal}) {
    const {index} = home

    return(
        <>
            <div className={s.glass}>
                <div className={"mb-10"}>
                    <ProcessButton onClick={onOpenModal}/>
                    <span className={"font-normal text-lg px-5"}>{index.subtitle}</span>
                </div>
                <FromBody/>
            </div>
        </>
    )
}
"use client"

import home from "@/datas/home.json"
import Form from "@/components/form/Form";
import {useState} from "react";
import ProcessModal from "@/components/ProcessModal";


export default function Home() {

    const {index} = home
    const [isOpen, setIsOpen] = useState(false)


  return (
    <div>
        <section className={"mx-5"}>
        <div className="w-full h-[550px] max-lg:h-[350px] max-md:h-[250px]">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                src="/assets/1.webm"
                style={{
                    WebkitMaskImage: "url('/assets/mask.svg')",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    WebkitMaskSize: "cover",
                    maskImage: "url('/assets/mask.svg')",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    maskSize: "cover",
                }}
            />
        </div>
        <div className={"flex flex-col text-5xl -mt-28 space-y-3 -tracking-wide mb-16 max-lg:text-3xl max-lg:-mt-24 max-sm:text-xl max-sm:-mt-16"}>
            <h1>{index.hook1}</h1>
            <h2>{index.hook2}</h2>
            <h3 className={"font-bold"}>{index.hook3}</h3>
        </div>
        <div>
                <h4 className="text-[11rem] max-md:text-[8rem] max-sm:text-[5rem] uppercase font-black -tracking-wider leading-[0.85]">
                    {index.titleForm}
                </h4>
                <div className="-mt-10 max-sm:-mt-3">
                    <Form onOpenModal={() => setIsOpen(true)} />
                </div>
        </div>
        </section>
        {isOpen && <ProcessModal onClose={() => setIsOpen(false)} />}
    </div>
  );
}

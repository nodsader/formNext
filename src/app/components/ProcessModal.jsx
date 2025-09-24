"use client"
import { useEffect, useRef } from "react"
import { gsap } from "@/plugins/gsap.client"
import Process from "@/components/Process"
export default function ProcessModal({ onClose }) {
    const modalRef = useRef(null)

    useEffect(() => {
        if (!modalRef.current) return

        gsap.fromTo(modalRef.current, {
            y: "-100%", opacity: 0},
            { y: "0", opacity: 1, duration: 0.6, ease: "power3.out"
        })

    }, [])

    const handleClose = () => {
        if (!modalRef.current) return
        gsap.fromTo(modalRef.current, {
            y: "0",
            opacity: 1,
        }, {
            y: "-100%",
            opacity: 0,
            duration: 0.5,
            ease: "power3.in",
            onComplete: onClose,
        })
    }


    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
            <div
                ref={modalRef}
                className="bg-background p-10 rounded-xl w-full h-screen relative flex items-center justify-center"
            >
                <button
                    onClick={handleClose}
                    className="absolute top-5 right-5 px-4 py-2 bg-red-500 text-white rounded"
                >
                    X
                </button>
                <Process/>
            </div>
        </div>
    )
}

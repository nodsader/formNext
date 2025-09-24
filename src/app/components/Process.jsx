"use client"
import { useEffect, useRef } from "react"
import {gsap} from "@/plugins/gsap.client"

export default function HorizontalTimeline() {
    const stepsRef = useRef([])

    useEffect(() => {

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

        stepsRef.current.forEach((step, i) => {
            tl.fromTo(
                step,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 0.6 },
                i * 0.4
            )
        })
    }, [])

    return (
        <div>

            <div className="flex flex-col items-start gap-8">
                <div
                    ref={(el) => (stepsRef.current[0] = el)}
                    className="flex items-center gap-4"
                >
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    <p className="text-xl font-medium">
                        J — Vous nous soumettez votre projet
                    </p>
                </div>

                <div
                    ref={(el) => (stepsRef.current[1] = el)}
                    className="flex items-center gap-4"
                >
                    <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                    <p className="text-xl font-medium">
                        J+10 — Audit et validation par notre équipe
                    </p>
                </div>

                <div
                    ref={(el) => (stepsRef.current[2] = el)}
                    className="flex items-center gap-4"
                >
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <p className="text-xl font-medium">
                        J+30 — Mise en orbite et financement
                    </p>
                </div>
            </div>
        </div>
    )
}
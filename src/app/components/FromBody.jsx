
import { useState } from "react"
import Slide1 from "@/components/slides/Slide1"
import Slide2 from "@/components/slides/Slide2"
import Slide3 from "@/components/slides/Slide3"

export default function FromBody() {
    const [currentStep, setCurrentStep] = useState(0)

    const [formData, setFormData] = useState({
        projectName: "",
        pitch: "",
        tags: [],
        advancement: "",
        name: "",
        firstName: "",
        role: "",
        linkedin: "",
        projectFile: null,
        brief: null,
        recommendation: "",
        hope: "",
    })

    const sanitizeInput = (value) => {
        return value.replace(/[<>]/g, "")
    }

    const handleSubmit = () => {
        console.log("Formulaire envoyé !", formData)

    }

    const addTag = (tag) => {
        setFormData((prev) => ({
            ...prev,
            tags: [...prev.tags, tag],
        }))
    }

    const removeTag = (tag) => {
        setFormData((prev) => ({
            ...prev,
            tags: prev.tags.filter((t) => t !== tag),
        }))
    }

    const handleChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value instanceof File ? value : sanitizeInput(value),
        }))
    }

    const nextStep = () => setCurrentStep((s) => s + 1)
    const prevStep = () => setCurrentStep((s) => s - 1)

    return (
        <div className="relative w-full mx-5 mb-10">
            {currentStep === 0 && (
                <Slide1
                    formData={formData}
                    handleChange={handleChange}
                    addTag={addTag}
                    removeTag={removeTag}
                    nextStep={nextStep}
                />
            )}
            {currentStep === 1 && (
                <Slide2
                    formData={formData}
                    setFormData={setFormData}
                    handleChange={handleChange}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            )}
            {currentStep === 2 && (
                <Slide3
                    formData={formData} handleChange={handleChange}
                    prevStep={prevStep}
                    handleSubmit={handleSubmit}
                />
            )}
        </div>
    )
}

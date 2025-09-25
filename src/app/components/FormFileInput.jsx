"use client"
import {useEffect, useState} from "react"
import {verifyFile} from "@/utils/verifyFile";

export default function FormFileInput({ label, field, formData, handleChange }) {
    const [preview, setPreview] = useState(null)

    const allowedTypes = ["image/png", "image/jpeg", "image/webp", "application/pdf"]
    const maxSizeMB = 5
    const badFileNamePattern = /[<>:"/\\|?*]/g
    const suspiciousContentPattern = /<script|onerror=|onload=|<iframe|<object/i



    useEffect(() => {
        const file = formData[field]
        if (file && file.type) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }, [formData[field]])


    const handleFileChange = async (e) => {
        const file = e.target.files?.[0]
        if (!file) return

        const isValid = await verifyFile(file)
        if (!isValid) return

        if (!allowedTypes.includes(file.type)) {
            alert("Format non supporté.")
            return
        }


        if (file.size > maxSizeMB * 1024 * 1024) {
            alert("Fichier trop volumineux.")
            return
        }


        if (badFileNamePattern.test(file.name)) {
            alert("Nom de fichier invalide.")
            return
        }


        const reader = new FileReader()
        reader.onload = () => {
            const content = reader.result
            if (typeof content === "string" && suspiciousContentPattern.test(content)) {
                alert("Contenu potentiellement dangereux détecté.")
                return
            }

            if (file.type.startsWith("image/", "application/")) {
                const imageReader = new FileReader()
                imageReader.onloadend = () => {
                    setPreview(imageReader.result)
                }
                imageReader.readAsDataURL(file)
            } else {
                setPreview(null)
            }

            handleChange(field, file)
        }

        reader.readAsText(file)
    }

    return (
        <div className="w-full mb-8 flex gap-4 items-start">
            {/* Aperçu */}
            <div className="w-24 h-24 bg-gray-800 border border-gray-600 rounded flex items-center justify-center overflow-hidden">
                {formData[field]?.type === "application/pdf" ? (
                    <object
                        data={URL.createObjectURL(formData[field])}
                        type="application/pdf"
                        width="100%"
                        height="100%"
                    >
                        <p className="text-xs text-white text-center">Aperçu PDF non disponible</p>
                    </object>
                ) : preview ? (
                    <img src={preview} alt="Preview" className="object-cover w-full h-full" />
                ) : (
                    <span className="text-xs text-white text-center px-2">Fichier prêt</span>
                )}
            </div>

            {/* Input + label */}
            <div className="flex-1">
                <label className="block text-sm text-gray-400 mb-1">{label}</label>
                <input
                    type="file"
                    onChange={handleFileChange}
                    accept={allowedTypes.join(",")}
                    className="w-1/2 bg-transparent border-b border-gray-600 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-main file:text-black hover:file:bg-cta-from"
                />
            </div>
        </div>
    )
}
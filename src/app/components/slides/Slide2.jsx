import FormFileInput from "@/components/FormFileInput";

export default function Slide2({formData, handleChange, nextStep,setFormData, prevStep}) {

    const handleFileChange = (e) => {
        const file = e?.target?.files?.[0]
        if (file) {
            setFormData(prev => ({ ...prev, projectFile: file }))
        }
    }

    return(
        <div>
            <div className={"flex flex-col mb-10"}>
            <h5 className="text-5xl font-bold mb-2">Uploadez vos fichiers</h5>
            <span className={"font-light text-sm mb-5"}>*N'hésitez pas à consulter notre <strong className={"font-black text-lg"}><a href={"/"}>politique de traitement des données</a></strong></span>
            </div>
            <FormFileInput
                label="Montrez nous votre plus beau logo (PNG ou JPEG seulement)"
                field="projectFile"
                accept="image/"
                formData={formData}
                handleChange={handleChange}
            />

            <FormFileInput
            label="Votre brief, expliquez de façon détaillée votre projet (business plan, stratégie, évolutions etc...) [Format PDF]"
            field="biref"
            accept="application/pdf"
            formData={formData}
            handleChange={handleChange}
            />

            <div className={"flex w-full justify-end px-10 gap-5"}>
                <button
                    onClick={prevStep}
                    className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Précédent
                </button>
                <button
                    onClick={nextStep}
                    className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Suivant
                </button>
            </div>

        </div>
    )
}
import FormText from "@/components/FormText";
import FormInput from "@/components/FormInput";

export default function Slide3({ formData, handleChange, handleSubmit, prevStep }) {

const areas = [
    {label: "Quelles sont vos attentes ", field: "hope"},
    {label: "Avez-vous des suggestions d'amélioration de notre process de soumission de projet ?", field: "recommendation"},
]

    return (
        <div>
            <h5 className="text-5xl font-bold mb-6">Dites nous en plus sur vos attentes</h5>
            {areas.map(f => (
            <FormText
                key={f.field}
                label={f.label}
                field={f.field}
                formData={formData}
                handleChange={handleChange}
            />
            ))}

            <div className={"flex w-full justify-end px-10 gap-5"}>
                <button
                    onClick={prevStep}
                    className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Précédent
                </button>
                <button
                    onClick={handleSubmit}
                    className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Envoyer
                </button>
            </div>
        </div>
    )
}

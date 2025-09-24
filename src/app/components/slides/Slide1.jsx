import FormInput from "@/components/FormInput";
import TagSelector from "@/components/TageSelector"


export default function Slide1({ formData, handleChange, nextStep, addTag, removeTag }) {
    const fields = [
        { label: "Nom du projet", field: "projectName" },
        { label: "Pitch du projet", field: "pitch" },
        { label: "Stade du projet", field: "advancement" },
        { label: "Nom", field: "name" },
        { label: "Prénom", field: "firstName" },
        { label: "Quel est votre rôle ?", field: "role" },
        { label: "Vous avez un profil LinkedIn ?", field: "linkedin" },
    ]

    const availableTags = ["Blockchain", "AI", "SaaS", "E-commerce", "FinTech"]

    return (
        <div>
            <h2 className="text-5xl font-bold mb-6">Présentez vous et votre projet</h2>

            {fields.map(f => (
                <FormInput
                    key={f.field}
                    label={f.label}
                    field={f.field}
                    formData={formData}
                    handleChange={handleChange}
                />
            ))}

            <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2">
                    Catégories
                </label>
                <TagSelector
                    availableTags={availableTags}
                    selectedTags={formData.tags}
                    addTag={addTag}
                    removeTag={removeTag}
                />
            </div>
            <div className={"flex w-full justify-end px-10"}>
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

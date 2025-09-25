export default function FormInput({ label, field, formData, handleChange, type = "text" }) {
    const isUrl = type === "url"


    return (
        <div className="w-full mb-8">
            <label className="block text-sm font-light mb-1">{label}</label>
            <input
                type={type}
                value={formData[field] || ""}
                onChange={(e) => handleChange(field, e.target.value)}
                className="w-1/2 bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none text-lg py-2"
                {...(isUrl && {
                    pattern: "https://.*",
                    title: "Veuillez entrer une url valide",
                })}
            />
        </div>
    )
}

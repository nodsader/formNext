export default function FormText({ label, field, formData, handleChange, type = "text" }) {
    return (
        <div className="w-full mb-8">
            <label className="block text-sm font-light mb-1">{label}</label>
            <textarea
                value={formData[field] || ""}
                onChange={(e) => handleChange(field, e.target.value)}
                className="w-1/2 bg-transparent border-b resize-none border-gray-600 focus:border-blue-500 outline-none text-lg py-2"
            />
        </div>
    )
}
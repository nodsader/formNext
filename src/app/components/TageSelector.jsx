export default function TagSelector({ availableTags, selectedTags, addTag, removeTag }) {
    return (
        <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => {
                const isSelected = selectedTags.includes(tag)
                return (
                    <button
                        key={tag}
                        type="button"
                        onClick={() => (isSelected ? removeTag(tag) : addTag(tag))}
                        className={`px-3 py-1 rounded-full text-sm ${
                            isSelected
                                ? "bg-blue-500 text-white"
                                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                    >
                        {tag}
                    </button>
                )
            })}
        </div>
    )
}

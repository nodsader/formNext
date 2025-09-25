const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp", "application/pdf"]

const detectMimeFromBytes = (bytes) => {
    const header = [...bytes.slice(0, 4)].map(b => b.toString(16)).join(" ")

    if (header === "ff d8 ff e0" || header === "ff d8 ff e1") return "image/jpeg"
    if (header === "89 50 4e 47") return "image/png"
    if (header === "25 50 44 46") return "application/pdf"
    if (header === "52 49 46 46") return "image/webp"
    return "unknown"
}

export async function verifyFile(file) {
    if (!file) return false

    if (!allowedMimeTypes.includes(file.type)) {
        alert("Type MIME non autorisé.")
        return false
    }

    if (file.name.match(/[<>:"/\\|?*]/)) {
        alert("Nom de fichier invalide.")
        return false
    }

    if (file.size > 5 * 1024 * 1024) {
        alert("Fichier trop volumineux.")
        return false
    }

    const buffer = await file.arrayBuffer()
    const byteArray = new Uint8Array(buffer)

    const detectedMime = detectMimeFromBytes(byteArray)
    if (detectedMime !== file.type) {
        alert("Le fichier semble falsifié (type incorrect).")
        return false
    }

    return true
}
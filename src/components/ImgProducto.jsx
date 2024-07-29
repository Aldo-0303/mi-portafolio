import { useEffect, useState } from "react"

export default function ImgProducto({ url, alt }) {
    const [verGrande, setVerGrande] = useState(false)

    useEffect(() => {
        if (verGrande) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [verGrande])

    return (
        <>
            <img src={url} alt={alt} className="flex-grow opacity-65 h-80 w-0 cursor-pointer object-cover transition-all duration-300 hover:w-full hover:opacity-100" onClick={() => setVerGrande(true)} />
            <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40 ${verGrande ? "" : "hidden"}`}
                onClick={() => setVerGrande(false)}>
                <img src={url} alt={alt} className="w-full max-w-5xl h-auto object-contain" />
            </div>
        </>
    )
}
export const Card = (props) => {
    return (
        <div className="py-4 px-8 bg-slate-100 shadow-lg rounded-lg my-10">
            <div className="flex justify-center md:justify-end -mt-16">
                <img className="w-20 h-20 object-cover rounded-full" style={!props.style ? { background: "#212121", padding: "0.5rem" } : props.style} src={props.imageUrl} alt={props.altImage} />
            </div>

            <div>
                <h2 className="text-gray-800 text-3xl font-semibold">{props.title}</h2>
                <p className="mt-2 text-gray-600">{props.description}</p>
            </div>

            <div className="flex justify-end mt-4">
                <a href={props.anchorLink} className="text-xl font-medium text-indigo-500">{props.anchor}</a>
            </div>
        </div>
    )
}
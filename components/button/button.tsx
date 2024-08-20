interface bttnProps {
    title:string,
    kind:string,
    type: "button" | "submit" | "reset",
    
    
}

export default function Button({title, kind, type,}:bttnProps)
{
    const generationClassByKind = () => {
        if(kind ==="bg-bttn-orange") return "bg-bttn-orange";

        return "bg-bttn-white"
    }

    return(
        <button className={`font-semibold py-3 px-6 rounded border-[0.5px] border-white bg-sky-700 text-white hover:border-black ${generationClassByKind()}`} type={type} >{title}</button>
    )
}
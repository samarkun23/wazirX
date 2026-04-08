export function TabButton({active, children , onClick}: {
    active: boolean;
    children: React.ReactNode;
    onClick: () => void
}) {
    return(
        <button type="button" className={`text-white mt-3 hover:bg-white/10 hover:duration-200 focus:ring-1 focus:ring-white/30 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 ${active? "bg-black border border-white/40" : "bg-black/30"}`} onClick={onClick}>
            {children}
        </button>         
    )
}
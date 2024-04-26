import "./Badge.css"

function Badge({ variant, color, children, onCLick = () => {} }) {
    const badgeStyle = "badge " + (variant==="pill" && "pill")
    const badgeColor = " " + color
    const classList = badgeStyle + badgeColor
    return (
        <div onClick={onCLick} className={classList}>
            {children}
        </div>
        
    )
}

export default Badge
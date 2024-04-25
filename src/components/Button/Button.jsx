import "./Button.css"

function Button({size, variant, children, className, ...rest}) {

    let btnClass = size ? `button-${size} ${className}` : className
    btnClass = variant ? `${btnClass} ${variant}`: btnClass

    return (
        <>
            <button className={btnClass} {...rest }>{children}</button>
        </>
    )
}

export default Button
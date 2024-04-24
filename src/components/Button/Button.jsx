import "./Button.css"

function Button({size, variant, children, className, ...rest}) {
    console.log(rest)
    /**
     * Challenge: 
     * 
     * Accept a `variant` prop and style the Button component
     * accordingly. The values can be `success`, `warning`, or `danger`. 
     * Check the Figma design for the specific colors to be used for each
     * variant.
     */
    let btnClass = size ? `button-${size} ${className}` : className
    btnClass = variant ? `${btnClass} ${variant}`: btnClass

    return (
        <>
            <button className={btnClass} {...rest }>{children}</button>
        </>
    )
}

export default Button
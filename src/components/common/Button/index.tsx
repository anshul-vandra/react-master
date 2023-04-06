interface IButtonProps {
    children: any;
    buttonClass?: string;
    disabled?: boolean;
    type?: "button" | "reset" | "submit";
    variant?: "primary" | "secondary";
    onClick?: any;
}

const Button = (props: IButtonProps) => {
    const {
        children,
        variant,
        buttonClass,
        type = "button",
        disabled,
        onClick,
    } = props;

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`
                ${variant === "primary" && "btnPrimary"} 
                ${variant === "secondary" && "btnSecondary"}
                ${buttonClass}`}
        >
            {children}
        </button>
    );
};

export default Button;

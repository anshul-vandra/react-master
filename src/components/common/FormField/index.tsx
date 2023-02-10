import { IRenderInputProps } from "Types/Common/FormField"

export const RenderInput = (props: IRenderInputProps) => {
    const {
        labelName,
        type = "text",
        name,
        containerClass,
        inputClass,
        errorClass,
    } = props

    return (
        <div className={containerClass}>
            <label>{labelName}</label>
            <input type={type} className={inputClass} name={name} />
            <span className={errorClass}>*error</span>
        </div>
    )
}

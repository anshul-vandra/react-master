import { IRenderInputProps } from "Types/Common/FormField"

export const RenderInput = ({
    labelName,
    type = "text",
    name,
    containerClass,
    inputClass,
    errorClass,
}: IRenderInputProps) => {
    return (
        <div className={containerClass}>
            <label>{labelName}</label>
            <input type={type} className={inputClass} name={name} />
            <span className={errorClass}>*error</span>
        </div>
    )
}

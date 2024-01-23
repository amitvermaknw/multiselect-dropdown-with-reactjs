import { DropDownItemProps } from "../utilities/DropDownInterface";


export function DropDownItem({ id, value, label }: DropDownItemProps) {
    return (
        <>
            <label key={label + "_" + id}>
                <input type="checkbox" id={id as string} key={value + "_" + id} value={value} />
                {value}
            </label>
        </>
    )
}
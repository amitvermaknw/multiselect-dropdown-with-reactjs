import { DropDownItemProps } from "../utilities/DropDownInterface";


export function DropDownItem({ id, value, label }: DropDownItemProps) {
    return (
        <div>
            <input type="checkbox" id={id as string} />
            <option value={value} key={id}>{label}</option>
        </div>
    )
}
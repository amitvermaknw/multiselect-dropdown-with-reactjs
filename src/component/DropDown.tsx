import * as stylex from '@stylexjs/stylex';
import { DropDownItem } from './DropdownItem';
import { DropDownItemProps } from '../utilities/DropDownInterface';

const styles = stylex.create({

})

type DropDownProps = {
    props: DropDownItemProps[]
}

export function DropDownComponent({ props }: DropDownProps) {
    return (
        <>
            {props.length ? <div><select>
                {
                    props.map((item: DropDownItemProps) => <DropDownItem {...item} />)
                }
            </select></div> : ''}
        </>
    )
}
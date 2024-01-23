import * as stylex from '@stylexjs/stylex';
import { DropDownItem } from './DropdownItem';
import { DropDownItemProps } from '../utilities/DropDownInterface';

const styles = stylex.create({
    base: {
        fontSize: 16,
        lineHeight: 1.5
    },
    select: {
        width: '100%',
        height: '100%',
        border: 'solid 1px rgb(0, 0, 0, 0.7)',
        borderRadius: '2px',
        padding: '5px',
    }
})

type DropDownProps = {
    props: DropDownItemProps[]
}

export function DropDownComponent({ props }: DropDownProps) {
    return (
        <div {...styles.base}>
            <select {...styles.select}>
                <option>Select</option>
            </select>
            {props.length ? <div>
                {
                    props.map((item: DropDownItemProps) => <DropDownItem {...item} key={item.id} />)
                }
            </div> : ''}
        </div>
    )
}
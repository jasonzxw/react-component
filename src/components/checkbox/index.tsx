import React from "react"

const JCheckbox = (props: any) => {
    const {
        label,
        children,
        update,
        checkedList
    } = props

    const onchange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        update(evt.target.value,evt.target.checked)
    }

    return (
        <label>
            <input value={label} onChange={onchange} type="checkbox" checked={checkedList.includes(label)}/>
            {children}
        </label>
    )
}


const JCheckboxGroup = (props: any) => {
    const {
        children,
        change,
        checkedList
    } = props

    return (
        <>
        {
            React.Children.map(children,(child) => {
                const childProps = {
                    ...child.props,
                    checkedList,
                    update: change
                }

                return React.cloneElement(child,childProps)
            })
        }
        </>
    )
}
export { JCheckbox, JCheckboxGroup} 
function Option({ option }) {
    return (
        <div className='fs-5'>
            {option} 
        </div>
    )
}

function OptionName({ optionName}) {
    return (
        <div className='fs-5'>
            {optionName}
        </div>
    )
}

export function SelectionOptionName({option, optionName}) {

    return (
        <>
            <Option option={option} />
            <OptionName optionName={optionName} />
        </>
    )
}
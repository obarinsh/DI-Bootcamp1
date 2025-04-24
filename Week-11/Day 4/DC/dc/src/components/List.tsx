import React from "react"

type Item<T> = {
    items: T[]
    renderItem: (item: T) => React.ReactNode

}

function List<T>({ items, renderItem }: Item<T>): JSX.Element {

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {renderItem(item)}
                    </li>
                ))}

            </ul>
        </div>
    )
}


export default List
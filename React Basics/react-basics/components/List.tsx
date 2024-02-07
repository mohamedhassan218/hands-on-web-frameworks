type ListParams = {
    title: string;
    description?: string;
}

// Distruct the object
function List({ title, description }: ListParams) {
    return <div>{title} <br></br> {description}</div>
}

export default List;
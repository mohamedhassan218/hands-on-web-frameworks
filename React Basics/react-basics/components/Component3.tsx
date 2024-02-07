type ComponentIIIParams = {
    text: string;
}

function ComponentIII(params: ComponentIIIParams) {
    return <h5>{params.text}</h5>
}

export default ComponentIII;
function Message(){
    const name = "";
    if(name)
        return <h1>Hello {name}</h1>;
    return <h1>Name is not defined</h1>
}

export default Message;
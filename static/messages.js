function Messages(props) {
    const [messages, setMessages] = React.useState([]);
    const [num, setNum] = React.useState([]);
    const getMessages = () => {
        axios.get("/messages").then((result) => {
            setMessages(result.data.messages);
        })
        axios.get("/messages").then((result) => {
            setNum(result.data.len);
        })
    }
    React.useEffect(() => {
        getMessages();
        setInterval(getMessages, props.interval);
    }, []
    )
    return (
        <div>
            <h3>Messages</h3>
            <div>{messages.map((item) =>
                <div>{item}</div>
            )}</div>
            <button onClick={getMessages}>Get New Messages</button>
            <h2>
                You have {num} messages
            </h2>
        </div>
    );
}

ReactDOM.render(<Messages interval={60 * 60 * 1000} />, document.getElementById("messages"));

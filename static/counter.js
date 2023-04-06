function Counter(props) {
    const [counter, setCounter] = React.useState([]);
    const getCount = () => {
        axios.get("/new_message_counter").then((result) => {
            setCounter(result.data);
        })
    }
    React.useEffect(() => {
        getCount();
        setInterval(getCount, props.interval);
    }, []
    )
    return (
        <div>
            You have {counter} new messages
        </div>
    );
}

ReactDOM.render(<Counter interval={3000} />, document.getElementById("counter"));

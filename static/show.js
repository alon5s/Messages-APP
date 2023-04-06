function Show() {
    const [num, setNum] = React.useState([]);
    const getNum = () => {
        axios.get("/num_msgs").then((result) => {
            console.log(result.data.len)
            setNum(result.data);
        })
    }
    React.useEffect(() => {
        getNum();
    }, []
    )
    return (
        <div>
            You have {num} messages
        </div>
    );
}

ReactDOM.render(<Show />, document.getElementById("num"));
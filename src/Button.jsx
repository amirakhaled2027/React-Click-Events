

function Button() {

    // const handleClick = () => console.log("OUCH!");
    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);
    // return (<button onClick={() => handleClick2("Amira")}>Click me!😜</button>);



    // let count = 0;

    // const handleClick = (name) => {
    //     if(count < 3) {
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`);
    //     } else {
    //         console.log((`${name} stop clicking me!`));
    //     }
    // }

    // return(<button onClick={() => handleClick("Amira")}>Click me!😜</button>)

    // const handleClick = (e) => e.target.textContent = "OUCH!😒";
    const handleClick = (e) => e.target.style.display = "none";
    
    // return(<button onClick={(e) => handleClick(e)}>Click me!😜</button>)
    return(<button onDoubleClick={(e) => handleClick(e)}>Click me!😜</button>)
}

export default Button
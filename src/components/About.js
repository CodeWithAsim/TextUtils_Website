import React from 'react'

export default function About(props) {

    // const [myStyle , setStyle ] = useState( {
    //     color:"black",
    //     backgroundColor:"white"
    // })
    // const [mybutton , setButton ] = useState("Enable Dark Mode")

    // const toggleStyle=()=>{
    //     if(myStyle.color === "white")
    //     {
    //         setStyle({
    //             color:"black",
    //             backgroundColor:"white"

    //         })
    //         setButton("Enable Dark Mode")
    //     }
    //     else{
    //         setStyle({
    //             color:"white",
    //             backgroundColor:"black"
                
    //         })
    //         setButton("Enable Light Mode")

    //     }
    // }

    const myStyle={
        color:props.mode==="dark"?"white":"black",
        backgroundColor:props.mode==="dark"?"#2b3b5eb8":"white"
    }

    return (
        <div className='container my-3'>
            <h1 style={{color:props.mode==="dark"?"white":"black"}}>About Us</h1>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" style={myStyle} id="panelsStayOpen-headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                           <strong>Analyze Your Text</strong> 
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                        TextUtils is a word counter and character counter utility to manipulate the text in the way you want ! Also to remove Extra spaces and copy text and to convet to Upper case and to Lower case !
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" style={myStyle} id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            <strong>Easy To Use </strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            You just need to click the respective tasks button to manipulate your text in the way you want to be !
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" style={myStyle} id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                           <strong> Browser compatible</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                            This website is browser compatible and it can be run on any kind of browser of your own choice . So you can open it on any of the browser of your own choice !
                        </div>
                    </div>
                </div>
            </div>
            {/* <button onClick={toggleStyle} className="btn btn-primary my-2">{mybutton}</button> */}
        </div>
    )
}

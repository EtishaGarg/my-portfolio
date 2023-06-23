import React from "react"

const YT_Card = (props) => {
    return (
        <div className='h-[450px] p-10 bg-purple-300 rounded-xl'>
            <div className='flex-col text-center h-[380px] bg-white shadow-xl rounded-xl overflow-hidden'>
                {/* <img className='w-full h-50' src={require(`../../assets/${props.thumbnail}`)}/> */}
                <img className='w-full h-50' src={props.thumbnail}/>
                {/* <img className='w-full h-50' src={`../../assets/${props.thumbnail}`}/> */}
                {/* <img className='w-full h-50' src="../../assets/images/logoE.png"/> */}
                <a href={props.link} target="_blank" className='text-2xl font-medium hover:font-bold'>{props.title}</a>
                <p className='mt-2 mb-4 text-lg'>{props.description}</p>
                <a className='bg-purple-300 px-3 py-2 text-2xl font-bold rounded shadow-xl hover:ring-2 hover:text-white' href={props.link} target="_blank">Watch on Youtube</a>
            </div>
        </div>
    )
}

export default YT_Card

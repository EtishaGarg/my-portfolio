import React from "react"

const Dev_Card = (props) => {
    return (
        // <div className='h-[400px] p-10 bg-violet-300 rounded-xl'>
        //     <div className='flex-col text-center h-[320px] bg-white shadow-xl rounded-xl overflow-hidden'>
        //         <img className='w-full h-50' src={props.image}/>
        //         <p className='mt-2 mb-4 text-lg'>{props.description}</p>
        //     </div>
        // </div>
        <div className="flex flex-col bg-violet-300 items-center justify-center rounded-lg">
            <img className='w-full h-50' src={props.image}/>
            <h1 className="font-bold text-2xl">{props.title}</h1>
            <p className="px-4 text-lg">{props.description}</p>
            <div className="flex gap-4 mt-2">
                <button className="shadow-lg text-white bg-violet-500 px-2 text-xl font-bold rounded">{props.tag1}</button>
                <button className="shadow-lg text-white bg-violet-500 px-2 text-xl font-bold rounded">{props.tag2}</button>
                <button className="shadow-lg text-white bg-violet-500 px-2 text-xl font-bold rounded">{props.tag3}</button>
            </div>
            <a href={props.github} className="my-2 font-bold text-xl hover:scale-110" target="_blank">View on Github &gt;&gt;</a>
        </div>

    )
}

export default Dev_Card

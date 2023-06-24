import React from "react"

const Dev_Card = (props) => {
    return (
        <div className='h-[400px] p-10 bg-purple-300 rounded-xl'>
            <div className='flex-col text-center h-[320px] bg-white shadow-xl rounded-xl overflow-hidden'>
                <img className='w-full h-50' src={props.image}/>
                <p className='mt-2 mb-4 text-lg'>{props.description}</p>
            </div>
        </div>
    )
}

export default Dev_Card

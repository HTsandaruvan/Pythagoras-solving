import React from 'react'

const Triangle = () => {
    return (
        <div className="relative flex justify-center items-end w-64 h-64 mt-10">
            <div className="absolute w-full h-full bg-gray-400 triangle"></div>
            <div className="absolute bottom-[-35px] left-[45%] text-blue-700 font-bold text-[30px]">a</div>
            <div className="absolute bottom-[45%] left-[-25px] text-red-700 font-bold text-[30px]">b</div>
            <div className="absolute bottom-[45%] right-[40%] text-green-600 font-bold text-[30px]">c</div>
        </div>)
}

export default Triangle
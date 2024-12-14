"use client"
import React, { useState } from 'react'

const SolvingForm = () => {
    const [valA, setValA] = useState("")
    const [valB, setValB] = useState("")
    const [valC, setValC] = useState("")
    const [solution, setSolution] = useState("")
    const [error, setError] = useState(false)

    const a = parseFloat(valA)
    const b = parseFloat(valB)
    const c = parseFloat(valC)

    const calculate = (e) => {
        e.preventDefault(); // Prevent form from refreshing the page

        if (!a && b && c) {
            if (b < c) {

                const calc = `A = √(${c} * ${c} - ${b} * ${b})
A = √(${c * c} - ${b * b})
A = √${c * c - b * b}
A = ${Math.sqrt(c * c - b * b).toFixed(2)}`;
                setSolution(calc)
                setValA(Math.sqrt(c * c - b * b).toFixed(2))
            } else {
                setError("Side C must be larger than side B for a valid triangle!")
            }
        } else if (!b && a && c) {
            if (a < c) {
                const calc = `B = √(${c} * ${c} - ${a} * ${a}) <
B = √(${c * c} - ${a * a})
B = √${c * c - a * a}
B = ${Math.sqrt(c * c - a * a).toFixed(2)}`;
                setSolution(calc)
                setValB(Math.sqrt(c * c - a * a).toFixed(2))
            } else {
                setError(`Side C (${c}) must be larger than side A (${a}) for a valid triangle!`)

            }
        } else if (!c && a && b) {
            const calc = `C = √(${a} * ${a} + ${b} * ${b})
C = √(${a * a} + ${b * b})
C = √${a * a + b * b}
C = ${Math.sqrt(a * a + b * b).toFixed(2)}`;
            setSolution(calc)
            setValC(Math.sqrt(a * a + b * b).toFixed(2))
        } else if (c && a && b) {
            setError("Please leave 1 side empty.")
        } else if (!c && !a && !b) {
            setError("Please enter 2 sides of the solving")
        }
    }

    const reset = () => {
        setValA("");
        setValB("");
        setValC("");
        setSolution("");
        setError("");
    };
    return (
        <div className='min-h-screen my-5'>
            <h1 className=' flex justify-center text- center mt-3 text-[30px] font-semibold'>Pythagorean Theorem Solver</h1>
            <div className=' flex justify-center items-center'>
                <div className="relative flex justify-center items-end w-64 h-64 mt-8">
                    <div className="absolute w-full h-full bg-gray-400 triangle shadow-2xl shadow-black"></div>
                    <div className="absolute bottom-[-45px] left-[45%] text-blue-700 font-bold text-[30px] ">{a || "A"}</div>
                    <div className="absolute bottom-[45%] left-[-60px] text-red-700 font-bold text-[30px]">{b || "B"}</div>
                    <div className="absolute bottom-[45%] right-[25%] text-green-600 font-bold text-[30px]">{c || "C"}</div>
                </div>

            </div>
            <div className='mt-16'>
                <div className={`flex items-center justify-center w-[95%] mb-3 mx-auto ${error != ("") ? "bg-red-100" : ""}`}>
                    <div className='text-red-500 font-medium text-2xl my-3 '>{error}</div>
                </div>
                <div className='grid md:grid-cols-7 auto-rows md:space-x-4 gap-2 mx-auto w-[95%] '>
                    <div className='md:col-span-4 block text-gray-800 font-medium border-2 border-gray-800 my-3 md:my-0 p-4'>
                        <form action="" className='space-y-4'>
                            <div>
                                <label htmlFor="sideA" className='block text-gray-800 font-medium text-lg'>Side : A</label>
                                <input value={valA} onChange={(e) => {
                                    setValA(e.target.value)
                                }}
                                    type="number" id="sideA" name="sideA" className={`text-lg bg-gray-200 text-gray-800 px-2 border  focus:ring-blue-800  focus:border-blue-700 w-[90%] h-8 ${error === `Side C (${c}) must be larger than side A (${a}) for a valid triangle!` ? "border-4 border-red-600" : "ring border-blue-500"}`} />
                            </div>

                            <div>
                                <label htmlFor="sideB" className='block text-gray-800 font-medium text-lg'>Side : B</label>
                                <input value={valB} onChange={(e) => {
                                    setValB(e.target.value)
                                }} type="number" id="sideB" name="sideB" className={`text-lg bg-gray-200 text-gray-800 px-2 border  focus:ring-blue-800  focus:border-blue-700 w-[90%] h-8 ${error === "Side C must be larger than side B for a valid triangle!" ? "border-4 border-red-600" : "ring border-blue-500"}`} />
                            </div>

                            <div>
                                <label htmlFor="sideC" className='block text-gray-800 font-medium text-lg'>Side : C</label>
                                <input value={valC} onChange={(e) => {
                                    setValC(e.target.value)
                                }} type="number" id="sideC" name="sideC" className=" text-lg bg-gray-200 text-gray-800 px-2 border ring focus:ring-blue-800 border-blue-500 focus:border-blue-700 w-[90%] h-8" />
                            </div>
                            <div className='flex justify-between space-x-7 w-[90%] '>
                                <button type='reset' onClick={reset} className='w-full text-white bg-blue-600 hover:bg-blue-700 transition-all focus-visible:ring-4 ring-2 focus:ring-blue-300 px-5 py-1.5' >Cancel</button>
                                <button onClick={calculate} type='submit' className='w-full text-white bg-blue-600 hover:bg-blue-700 transition-all focus-visible:ring-4 ring-2 focus:ring-blue-300 px-5 py-1.5' >Generate</button>

                            </div>
                        </form>
                    </div>
                    <div className='md:col-span-3 block text-gray-800 font-medium border border-gray-800 my-3 md:my-0 p-4'>
                        <div className='space-y-3'>
                            <div className='text-[20px] font-bold'>Solution :</div>
                            <div className='text-[18px] font-medium text-gray-700 whitespace-pre-wrap'>{solution || "No calculation yet."}</div>
                        </div >
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SolvingForm
import { useEffect } from "react";



        function InputBox({label,currencys,value,setValue,setCurrency}) {

            const currencyOptions =  Object.keys(currencys) ;
           
            
            return (
                <div className={`bg-white p-3 rounded-lg text-sm flex`}>
                    <div className="w-1/2">
                        <label   className=" mb-2 inline-block text-2xl text-black">
                            {label}
                        </label>
                        <input
                            className="shadow-2xl border px-2 w-full bg-transparent py-2 " type="number"
                            value={value} onChange={(e)=>setValue(Number(e.target.value))}
                        />
                    </div>
                    <div className="w-1/2 flex flex-wrap justify-end text-right">
                        <p className="text-black mb-2 w-full">Currency Type</p>
                        <select
                            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                            onChange={(e)=>setCurrency(e.target.value)}
                        >
                            
                                
                                {currencyOptions.map((currency)=>{
                                return <option value={currency}>{currency}</option>
        })}
                        
                        </select>
                    </div>
                </div>
            );
        }

        export default InputBox;
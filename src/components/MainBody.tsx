import { useState } from "react"

const scales = [
    {
        id: 1,
        name: "UMF 10 +"
    },
    {
        id: 2,
        name: "UMF 15+ "
    },
    {
        id: 3,
        name: "UMF 20+"
    },
    {
        id: 4,
        name: "UMF 24+"
    },
    {
        id: 5,
        name: "UMF 26+"
    },
    {
        id: 6,
        name: "UMF 28+"
    },
    {
        id: 7,
        name: "UMF 30+"
    },
]

const MainBody = () => {

    // const [scale, setScale] = useState(1);
    const [active, setActive] = useState(1)

    return (
        <>
            <div className="px-5 flex m-auto mb-20">

                {/* left */}
                <div className="left w-1/2 grid grid-cols-2 gap-1">
                    <img src="/med1.png" className="col-span-2 w-full" alt="" />
                    <img src="/med2.png" className="col-span-1 w-full" alt="" />
                    <img src="/med3.png" className="col-span-1 w-full" alt="" />
                    <img src="/deepbudha.png" className="col-span-2 w-full" alt="" />
                    <img src="/med4.png" className="w-full" alt="" />
                    <img src="/med5.png" className="w-full" alt="" />
                    <img src="/med6.png" className="w-full" alt="" />
                    <img src="/med7.png" className="w-full" alt="" />
                </div>
                {/* right */}
                <div className="right flex-1 px-10">
                    <div className="product-name text-[40px] text-[#313131]">
                        <h1>Manuka Honey <br /> UMF 24+ <br /> MGO 1122+</h1>
                        <button className="bg-[#66666626] mt-5 flex gap-2 items-center justify-center rounded-2xl p-2">
                            <img src="/warning.png" alt="" />
                            <span className="text-[14px] text-[#666666]">What is UMF and MGF?</span>
                        </button>
                    </div>
                    <div className="desc mt-8">
                        <div className="flex items-center justify-between">
                            <span>The Optimiser</span>
                            <span className="flex items-center gap-x-1">
                                <img src="/heart.png" alt="" />
                                <img src="/heart.png" alt="" />
                                <img src="/heart.png" alt="" />
                                <img src="/heart.png" alt="" />
                                <img src="/heart.png" alt="" />
                                825 REVIWS
                            </span>
                        </div>
                        <p className="mt-5 text-[#313131] text-[18px]">
                            For those times in life when quality comes first. This pure UMF™ 24+ Manuka
                            Honey is powerfully active, sourced from wild and rugged locations around
                            Aotearoa New Zealand and great for almost all uses. It has a full, delicious
                            flavour and your body will love you for it.
                        </p>
                    </div>
                    <div className="flex items-center justify-between mt-14">
                        <img src="/cert1.svg" alt="" />
                        <img src="/cert2.svg" alt="" />
                        <img src="/cert3.svg" alt="" />
                        <img src="/cert4.svg" alt="" />
                        <img src="/cert5.svg" alt="" />
                        <img src="/cert6.svg" alt="" />
                    </div>
                    <div className="products mt-5">
                        <span className="py-3">SIZE (SELECT ONE)</span>
                        <br />
                        <span>Variant: 126g| 4.4oz</span>
                        <div className="mt-5 grid grid-cols-4 gap-4">
                            <img src="/prod1.png" alt="" />
                            <img src="/prod2.png" alt="" />
                            <img src="/prod3.png" alt="" />
                            <img src="/prod4.png" alt="" />
                            <img src="/prod5.png" alt="" />
                            <img src="/prod6.png" alt="" />
                            <img src="/prod7.png" alt="" />
                        </div>
                        <div className="desc mt-8">
                            <p className="text[#FBF9F6]">PAYMENT OPTIONS (SELECT ONE)</p>



                            <div className="flex flex-col justify-center h-[144px] px-5  bg-[#F2F2F2] rounded-lg" >
                                <div className="flex items-center justify-between">

                                    <button className=" h-[64.2px] text-white px-8 py-2 flex items-center gap-x-12 bg-[#F1B434] rounded-4xl">
                                        <p>One-time  <br /> purchase</p>
                                        <p>$55.88 <br /> USD</p>
                                    </button>
                                    <button className="h-[64.2px]  px-8 py-2 flex items-center gap-x-12 bg-[#ffffff] rounded-4xl">
                                        <p>Subscribe & save  <br /> 20%</p>
                                        <p>$44.70 <br /> USD</p>
                                    </button>

                                </div>
                                <div className="flex gap-2 items-center text-[12px] ">
                                    <img src="/load.png" className="size-[16px] mt-5" alt="" />
                                    <p className="mt-5">What is a Subscription?</p>
                                </div>
                            </div>

                            <div className="btns  mt-4">
                                <p>SELECT QUANTITY</p>
                                <div className="flex mt-5 items-center justify-center gap-x-10">
                                    <div className="bg-[#F1B434] h-[47px] text-white flex items-center justify-center gap-x-10 rounded-4xl py-2 w-1/3">
                                        <button>-</button>
                                        <button>1</button>
                                        <button>+</button>
                                    </div>
                                    <button className="bg-black flex-1 h-[47px] text-white rounded-4xl">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                            <div className="mt-8 bg-[#F2F2F2] rounded-2xl">
                                <div className="flex justify-between items-center w-1/2 p-5 m-auto">
                                    <img src="/left.png" alt="" />
                                    <h1>Beauty Bundle</h1>
                                    <img src="/right.png" alt="" />
                                </div>

                                <div className="m-auto p-5 flex items-center justify-center gap-x-3">
                                    <div className="flex flex-col items-center justify-center gap-y-2">
                                        <img src="/cart1.png" alt="" />
                                        <h2>UMF 20+</h2>
                                        <button className="border border-gray-400 px-2 py-1 flex items-center justify-center rounded-4xl">
                                            <span>250g</span>
                                            <img src="/dropdown.png" alt="" />
                                        </button>
                                    </div>
                                    <span>+</span>
                                    <div className="flex flex-col items-center justify-center gap-y-2">
                                        <img src="/cart2.png" alt="" />
                                        <h2>UMF 24+</h2>
                                        <button className="border border-gray-400 px-2 py-1 flex items-center justify-center rounded-4xl">
                                            <span>250g</span>
                                            <img src="/dropdown.png" alt="" />
                                        </button>
                                    </div>
                                    <span>+</span>
                                    <div className="flex flex-col items-center justify-center gap-y-2">
                                        <img src="/cart3.png" alt="" />
                                        <h2>Wooden Spoon</h2>
                                    </div>

                                    <div className="add-to-cart">
                                        <div className="text-nowrap flex items-center justify-between gap-x-1">
                                            <span className="text-[12px] line-through">$450 USD</span>
                                            <span className="font-bold">$400 USD</span>
                                            <span className="text-[12px] text-green-700">Save 10%</span>
                                        </div>
                                        <button className="bg-gray-900 mt-3 text-nowrap rounded-4xl px-6 py-2 text-white">ADD BUNDLE TO CART</button>
                                    </div>
                                </div>

                            </div>
                            <div className="mt-10 bg-[#FBF9F6]">
                                <div className="flex items-center text-nowrap gap-x-4 justify-between">
                                    <div className="flex items-center justify-center">
                                        <img src="/Colourclub Logo.png" alt="" />
                                        <span>Colourclub members earn up to</span>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="bg-white rounded-full p-3 text-[#F39C12]">56</div>
                                        <span>reward points when buy this item.</span>
                                    </div>
                                    <p>Sign Up or Login</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between my-5">
                                <div className="flex flex-col">
                                    <span>DELIVERY</span>
                                    <span>FREE DELIVERY ON ORDERS OVER $30</span>
                                </div>
                                <div className="flex flex-col">
                                    <span>ESTIMATED DELIVERY DATE:</span>
                                    <span>Jun 9 - Jun 13 to</span>
                                </div>
                            </div>
                            <hr />
                            <div className="flex items-center  justify-between my-5">
                                <div className="flex  flex-col">
                                    <span>AFTER PAY</span>
                                    <span className="flex items-center ">or 4 interest-free payments of $13.97 with <img src="/afterpay.png" alt="" /><img src="/warning.png" alt="" /></span>
                                </div>

                            </div>
                            <hr />
                            <div className="mt-5">
                                <div className="flex  flex-col">
                                    <span>UMF SCALE</span>
                                    <div className="flex gap-x-5">

                                        {
                                            scales?.map((item: any) => (

                                                <span onClick={() => {
                                                    setActive(item.id)
                                                }} className={` border-b-2 ${active === item.id ? `text-[#830065]` : `border-b-amber-500`}`}>{item.name}</span>


                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <div className="flex  flex-col">
                                    <span>TASTE PROFILE</span>
                                </div>
                                <div>

                                    <label htmlFor="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default range</label>
                                    <input id="default-range" type="range" value="50" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />

                                </div>

                                <div className="flex justify-between items-center">
                                    <span>Clean & Intense</span>
                                    <span>Bold & Intense</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainBody
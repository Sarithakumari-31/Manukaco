

const Navbar = () => {
  return (
    <>
    <div className="w-full h-[126.55px] text-[#313131] flex px-14 justify-between items-center">
        <button className="border border-[#313131] rounded-4xl px-5 py-2 ">
            WHICH MANUKA IS FOR ME?
        </button>
        <a href="">Shop</a>
        <a href="">Explore</a>
        <img src="/public/new_zealand_honey_logo.svg.png" alt="" />
        <a href="">About</a>
        <a href="">Rewards</a>
        <a href="">Contact</a>
        <div className="flex items-center justify-between gap-x-5">
        <img src="/public/Account.svg" alt="" />
        <img src="/public/serach.svg" alt="" />
        <img src="/public/wishlist.svg" alt="" />
        </div>
    </div>
    </>
  )
}

export default Navbar
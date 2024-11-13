import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="w-[1920px] h-[80px] bg-[#A497ac] py-4 pr-10 flex justify-end items-center shadow-lg shadow-white">
        {/* Navbar links */}
        <ul className="flex text-white text-2xl space-x-11">
          <li><Link href="./">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/reservation">Reservation</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>

        {/* Login Button */}
        <button className="ml-[35px] px-8 py-3 bg-[#1b7a42] text-white rounded-[13px]">
          Login
        </button>
        <button className="ml-[35px] bg-[#1b7a42] text-white  px-8 py-3 rounded-[13px]">
          Signup
        </button>
      </div>
    </>
  );
}

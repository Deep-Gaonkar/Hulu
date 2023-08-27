import Image from "next/image"

import { links } from "@/utils/constants"

import HeaderItem from "./HeaderItem"

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        {links.map(link => (
          <HeaderItem key={link.title} title={link.title} Icon={link.icon} />
        ))}
      </div>

      <Image
        src="https://links.papareact.com/ua6"
        alt="Logo"
        width={200}
        height={200}
        className="object-contain"
      />
    </header>
  )
}

export default Header
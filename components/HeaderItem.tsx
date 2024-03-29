import HeaderItemProps from "@/utils/types"

const HeaderItem = ({ title, Icon }: HeaderItemProps) => {
  return (
    <div>
      <div className="flex flex-col items-center cursor-pointer w-12 group sm:w-20 hover:text-white">
        <Icon className="h-8 mb-1 group-hover:animate-bounce" />
        <p className="opacity-0 group-hover:opacity-100 tracking-widest">
          {title}
        </p>
      </div>
    </div>
  )
}

export default HeaderItem

const HeadingText = ({children, className}) => {
  return (
    <h3 className={`lg:text-[36px] md:text-[24px] text-[18px]   ${className}`} >{children}</h3>
  )
}

export default HeadingText
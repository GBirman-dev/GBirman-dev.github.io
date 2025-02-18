

const TitleText = ({children, className}) => {
  return (
      <p className={`text-[16px] text-[#0C0C0C80]/50 uppercase font-readexLight ${className}`}>[{children}]</p>
  )
}

export default TitleText
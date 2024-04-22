
const LayoutDashboard = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col gap-y-4">
        <nav className="bg-black text-white">This is navbar component</nav>
    {children}
    </div>
  )
}

export default LayoutDashboard
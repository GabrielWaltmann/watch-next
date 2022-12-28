export default function Checkbox({children, className}: {children: string, className: string}) {
  return <>
    <div className={"flex items-center" + " " + className}>
      <input type="checkbox" className={"h-6 w-6 rounded cursor-pointer focus:ring-offset-0 focus:ring-transparent border-0"}/>

      <span className="pl-2 text-sm text-gray-800 font-normal max-sm:text-xs">{children}</span>
      
    </div>
  </>
}

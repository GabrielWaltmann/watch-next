export default function Checkbox({children, className}: {children: string, className: string}) {
  return <>
    <div className={"flex items-center "+ className}>
     <input  id="red-checkbox" type="checkbox" value="" className="w-4 h-4 rounded cursor-pointer focus:ring-offset-0 focus:ring-transparent border-0 bg-gray-2 text-gray-2"/>
    <label htmlFor="red-checkbox" className="ml-2 text-sm text-gray-3 cursor-pointer">{children}</label>
      
    </div>
    
  </>
}

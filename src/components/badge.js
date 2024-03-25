export default function Badge({ title }) {
    return (
        <div className="w-[200px] h-[50px] bg-zinc-800 rounded-[5px] flex items-center justify-center">
          <div className="text-white text-base font-bold font-['Albert Sans']">{title}</div>
         </div>
    )
}
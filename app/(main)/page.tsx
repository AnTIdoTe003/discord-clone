import { ModeToggle } from "@/components/modeToggle/mode-toggle";
import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div className="flex w-full justify-evenly">
      <UserButton afterSignOutUrl="/"/>
      <ModeToggle/>
    </div>
  )
}
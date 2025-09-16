import Link from "next/link"
import { Button } from "./ui/button"


const HeroSection = () => {
  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
        <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
            <h1 className="bg-gradient-to-b from-gray-400 via-gray-200 to-gray-600 font-extrabold tracking-tighter text-transparent bg-clip-text pb-2 pr-2 text-4xl md:text-6xl lg:text-7xl text-center mb-6 md:mb-10 flex flex-col gap-6">
                Your Prep Buddy !!
                <br/>
                Ace Your Interviews with AI-Powered Precision.
            </h1>
        </div>

        <div>
            <Link href="/dashboard">
            <Button size="lg" className="px-8" varaint="outline">Get Started</Button>
            </Link>
        </div>
        </div>
    </section>
  )
}

export default HeroSection
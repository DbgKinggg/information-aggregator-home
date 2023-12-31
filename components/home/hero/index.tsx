import Block3D from "@/components/home/hero/3DBlock";
import JoinWaitlist from "../shared/join-waitlist";
import ClientOnly from "@/components/base/client-only";
import Spotlight from "@/components/ui/spotlight";

function HomeHero() {
    return (
        <section className="px-5 relative overflow-hidden md:px-10 pt-32 md:pt-44 flex flex-col items-center gap-y-4 min-h-screen max-w-5xl mx-auto">
            <Spotlight
                className="-top-40 left-0 sm:left-20 md:left-60 md:-top-20"
                fill="white"
            />
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text bg-gradient-to-r text-transparent from-zinc-400 to-zinc-100 text-center">
                The all-in-one<br />Web3 Dashboard
            </h1>
            <p className="text-xl md:text-3xl text-center text-muted-foreground mt-4">
                Reimaginate your Web3 experience, <br />just like building blocks
            </p>
            <JoinWaitlist />
            <div className="mx-auto w-full max-w-[15rem] md:max-w-none md:w-[40rem] lg:w-[50rem] mt-5 relative">
                <ClientOnly>
                    <Block3D />
                </ClientOnly>
            </div>
        </section>
    );
}

export default HomeHero;
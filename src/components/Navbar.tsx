import Link from 'next/link'
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from './ui/button'
import Image from 'next/image'




const NavBar = () => {
    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-20 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href="/" className="flex z-40 font-semibold">
                        <Image src="/NebulaIOLogo.png" alt="logo"  width={65} height={65} quality={100}/>
                    </Link>
                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                            <Link href='/features' className={buttonVariants({
                                variant: "ghost",
                                size: "sm"
                            })}> Features</Link>
                            <Link href='/pricing' className={buttonVariants({
                                variant: "ghost",
                                size: "sm"
                            })}> Pricing</Link>
                            
                            <Link href='/dashboard' className={buttonVariants({

                                size: "sm"
                            })}> Dashboard</Link>
                        </>

                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default NavBar
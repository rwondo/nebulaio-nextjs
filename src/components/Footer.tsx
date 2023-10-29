import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Separator } from "@/components/ui/separator"



function Footer() {
	return (
		<>
    <MaxWidthWrapper>
			<div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start ">

				<div className="py-5 ">
        <Separator />

					<ul>
						<p className="text-gray-800 font-bold text-xl pb-4 pt-4">Product</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-gray-400 cursor-pointer">
							Stocks
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-gray-400 cursor-pointer">
							Futures & Options
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-gray-400  cursor-pointer">
							Mutual Funds
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-gray-400  cursor-pointer">
							Fixed deposits
						</li>
					</ul>
				</div>
				<div className="py-5">
        <Separator />

        <ul>
						<p className="text-gray-800 font-bold text-xl pb-4 pt-4">Support</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-gray-400 cursor-pointer">
							Contact
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-gray-400  cursor-pointer">
							Support Portals
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-gray-400 cursor-pointer">
							List Of Charges
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-gray-400  cursor-pointer">
							Downloads & Resources
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-gray-400  cursor-pointer">
							Videos
						</li>
					</ul>
				</div>
				<div className="py-5">
        <Separator />

					<ul>
						<p className="text-gray-800 font-bold text-xl pb-4 pt-4">Support</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-gray-400 cursor-pointer">
							Contact
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-gray-400  cursor-pointer">
							Support Portals
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-gray-400  cursor-pointer">
							List Of Charges
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:ttext-gray-400  cursor-pointer">
							Downloads & Resources
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-gray-400  cursor-pointer">
							Videos
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
			</div>
    </MaxWidthWrapper>
		</>
	);
}

export default Footer;
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useConnect } from "wagmi";
import { injected } from "wagmi/connectors";

export default function Header() {
    const [hideConnectBtn, setHideConnectBtn] = useState(false);
    const { connect } = useConnect();

    useEffect(() => {
        if (window.ethereum && window.ethereum.isMiniPay) {
            setHideConnectBtn(true);
            connect({ connector: injected({ target: "metaMask" }) });
        }
    }, []);

    return (
        <Disclosure as="nav" className="">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-1 focus:ring-inset focus:rounded-none focus:ring-black">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start bg-pink-500">
                              
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                    <a
                                        href="#"
                                        className="inline-flex items-center border-b-2 border-red px-1 pt-1 text-sm font-medium text-gray-900"
                                    >
                                        📩💸
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center left-2 sm:static sm:ml-auto sm:pr-6">
                                {!hideConnectBtn && (
                                    <ConnectButton
                                        showBalance={{
                                            smallScreen: true,
                                            largeScreen: false,
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 pt-2 pb-4">
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="border-l-4 border-red py-2 pl-3 pr-4 text-base font-medium text-green animate-pulse"
                            >
                                
                            </Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

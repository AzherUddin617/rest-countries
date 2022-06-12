import Image from 'next/image';
import { useMemo } from 'react';

import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';

import moonSvg from '../files/moon-dark.svg';

function Layout(props: { children: React.ReactNode }) {
  return (
    <>
        <header className="header bg-primary dark:bg-primary-dark py-4 shadow-sm">
            <div className="container flex justify-between">

                <h2 className="title text-lg font-semibold">Where in the world?</h2>

                <div className="mode-change flex items-center">
                    {/* <Image src={moonSvg} layout="intrinsic" width={20} alt="S" className='mode-icon' /> */}
                    <MdOutlineDarkMode className='mode-icon' />

                    <p className="mode-text pl-2">Dark Mode</p>
                </div>

            </div>
        </header>

        <main className="main bg-secondary dark:bg-secondary-dark pt-6">
            {props.children}
        </main>
    </>
  )
}

export default Layout
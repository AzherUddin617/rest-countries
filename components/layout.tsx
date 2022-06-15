import { useEffect } from 'react';

import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md';

import {
    useAppDispatch,
    useAppSelector,
} from '../store/hooks';
import {
    selectTheme,
    toggleTheme,
} from '../store/theme/themeSlice';
import * as themes from '../store/theme/themeTypes';

function Layout(props: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector(selectTheme);

  useEffect(()=> {
    if (themeMode === themes.dark) {
        document.getElementsByTagName('html')[0].classList.add('dark');
    } else {
        document.getElementsByTagName('html')[0].classList.remove('dark');
    }
  }, [themeMode]);

  return (
    <>
        <header className="header bg-primary dark:bg-primary-dark dark:text-secondary py-4 shadow-sm">
            <div className="container flex justify-between">

                <h2 className="title text-lg font-semibold">Where in the world?</h2>

                <button 
                    onClick={()=> dispatch(toggleTheme())}
                    className="mode-change flex items-center"
                >
                    {/* <Image src={moonSvg} layout="intrinsic" width={20} alt="S" className='mode-icon' /> */}
                    {
                        themeMode === themes.dark ?
                        <MdDarkMode className='mode-icon' /> :
                        <MdOutlineDarkMode className='mode-icon' />
                    }

                    <p className="mode-text pl-2">Dark Mode</p>
                </button>

            </div>
        </header>

        <main className="main bg-secondary dark:bg-secondary-dark dark:text-secondary pt-6">
            {props.children}
        </main>
    </>
  )
}

export default Layout
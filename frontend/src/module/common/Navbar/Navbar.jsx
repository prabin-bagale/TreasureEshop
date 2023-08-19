/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
const menuItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const gotopath = (path) => {
    navigate(path);
  };
  return (
    <div className='relative w-full bg-white'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8'>
        <div className='inline-flex items-center space-x-2'>
          <span>
            <svg
              width='30'
              height='30'
              version='1.0'
              id='Layer_1'
              xmlns='http://www.w3.org/2000/svg'
              xmlns:xlink='http://www.w3.org/1999/xlink'
              viewBox='0 0 64 64'
              enable-background='new 0 0 64 64'
              xml:space='preserve'
              fill='#000000'
            >
              <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                {" "}
                <g>
                  {" "}
                  <path
                    fill='#F9EBB2'
                    d='M22,12c0-5.523,4.478-10,10-10s10,4.477,10,10v12h-2V12c0-4.418-3.582-8-8-8s-8,3.582-8,8v12h-2V12z'
                  ></path>{" "}
                  <g>
                    {" "}
                    <path
                      fill='#45AAB8'
                      d='M10,60c0,1.104,0.896,2,2,2h40c1.104,0,2-0.896,2-2v-2H10V60z'
                    ></path>{" "}
                    <path
                      fill='#45AAB8'
                      d='M53,22h-9v3c0,0.553-0.447,1-1,1h-4c-0.553,0-1-0.447-1-1v-3H26v3c0,0.553-0.447,1-1,1h-4 c-0.553,0-1-0.447-1-1v-3h-9c-0.553,0-1,0.447-1,1v33h44V23C54,22.447,53.553,22,53,22z'
                    ></path>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <path
                      fill='#394240'
                      d='M54,20H44v-8c0-6.627-5.373-12-12-12S20,5.373,20,12v8H10c-1.105,0-2,0.895-2,2v38c0,2.211,1.789,4,4,4h40 c2.211,0,4-1.789,4-4V22C56,20.895,55.105,20,54,20z M22,12c0-5.523,4.478-10,10-10s10,4.477,10,10v12h-2V12c0-4.418-3.582-8-8-8 s-8,3.582-8,8v12h-2V12z M38,12v8H26v-8c0-3.314,2.687-6,6-6S38,8.686,38,12z M54,60c0,1.104-0.896,2-2,2H12c-1.104,0-2-0.896-2-2 v-2h44V60z M54,56H10V23c0-0.553,0.447-1,1-1h9v3c0,0.553,0.447,1,1,1h4c0.553,0,1-0.447,1-1v-3h12v3c0,0.553,0.447,1,1,1h4 c0.553,0,1-0.447,1-1v-3h9c0.553,0,1,0.447,1,1V56z'
                    ></path>{" "}
                    <path
                      fill='#394240'
                      d='M36,34c-1.104,0-2.104,0.447-2.828,1.172L32,36.336l-1.172-1.164C30.104,34.447,29.104,34,28,34 c-2.209,0-4,1.791-4,4c0,1.104,0.713,2.135,1.438,2.859l5.855,5.855c0.391,0.391,1.023,0.391,1.414,0l5.84-5.84 C39.271,40.15,40,39.104,40,38C40,35.791,38.209,34,36,34z M37.156,39.438L32,44.594l-5.156-5.156C26.481,39.076,26,38.553,26,38 c0-1.105,0.896-2,2-2c0.553,0,1.053,0.223,1.414,0.586l1.879,1.871c0.391,0.391,1.023,0.391,1.414,0l1.879-1.871 C34.947,36.223,35.447,36,36,36c1.104,0,2,0.895,2,2C38,38.553,37.519,39.076,37.156,39.438z'
                    ></path>{" "}
                  </g>{" "}
                  <path
                    fill='#F76D57'
                    d='M37.156,39.438L32,44.594l-5.156-5.156C26.481,39.076,26,38.553,26,38c0-1.105,0.896-2,2-2 c0.553,0,1.053,0.223,1.414,0.586l1.879,1.871c0.391,0.391,1.023,0.391,1.414,0l1.879-1.871C34.947,36.223,35.447,36,36,36 c1.104,0,2,0.895,2,2C38,38.553,37.519,39.076,37.156,39.438z'
                  ></path>{" "}
                  <path
                    opacity='0.2'
                    d='M54,60c0,1.104-0.896,2-2,2H12c-1.104,0-2-0.896-2-2v-2h44V60z'
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </span>
          <span className='font-bold'>TreasureShop</span>
        </div>
        <div className='hidden grow items-start lg:flex'>
          <ul className='ml-12 inline-flex space-x-8'>
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className='inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900'
                >
                  {item.name}
                  <span>
                    <ChevronDown className='ml-2 h-4 w-4' />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='hidden space-x-2 lg:block'>
          <button
            onClick={() => gotopath("/signup")}
            type='button'
            className='rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
          >
            Sign Up
          </button>
          <button
            onClick={() => gotopath("/login")}
            type='button'
            className='rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
          >
            Log In
          </button>
        </div>
        <div className='lg:hidden'>
          <Menu onClick={toggleMenu} className='h-6 w-6 cursor-pointer' />
        </div>
        {isMenuOpen && (
          <div className='absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden'>
            <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
              <div className='px-5 pb-6 pt-5'>
                <div className='flex items-center justify-between'>
                  <div className='inline-flex items-center space-x-2'>
                    <span>
                      <svg
                        width='30'
                        height='30'
                        viewBox='0 0 50 56'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z'
                          fill='black'
                        />
                      </svg>
                    </span>
                    <span className='font-bold'>DevuI</span>
                  </div>
                  <div className='-mr-2'>
                    <button
                      type='button'
                      onClick={toggleMenu}
                      className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
                    >
                      <span className='sr-only'>Close menu</span>
                      <X className='h-6 w-6' aria-hidden='true' />
                    </button>
                  </div>
                </div>
                <div className='mt-6'>
                  <nav className='grid gap-y-4'>
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50'
                      >
                        <span className='ml-3 text-base font-medium text-gray-900'>
                          {item.name}
                        </span>
                        <span>
                          <ChevronRight className='ml-3 h-4 w-4' />
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <div className='mt-2 space-y-2'>
                  <button
                    onClick={() => gotopath("/signup")}
                    type='button'
                    className='w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => gotopath("/login")}
                    type='button'
                    className='w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
                  >
                    Log In
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

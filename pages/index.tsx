import {
  CKAN,
  DatasetSearchForm,
  ListOfDatasets,
  PackageSearchOptions,
  Organization,
  Group,
} from '@portaljs/ckan';
import getConfig from 'next/config';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";


export default function Home() {
  const router = useRouter();
  const ref = useRef(null);

  useEffect(() => {
    autoFocus();
  }, []);

  const autoFocus = () => {
    ref.current.focus();
  };

  const handleclick = (e) => {
    //urlencode ref current value
    e.preventDefault();
    if (router.pathname !== "/search") {
      const query = encodeURIComponent(ref.current.value);
      router.push(`/search?q=${query}`);
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-zinc-900 bg-gradient-conic-h">
      <section className='flex mx-auto w-[90%]  p-4'>
        <div className='flex items-center justify-center p-4 rounded-2xl bg-black'><span className='text-white font-bold'>β</span></div>
        <div className='flex shrink items-center justify-center grow gap-x-4 lg:gap-x-8'>
          <Link href="#" className='font-semibold font-mono'>Home</Link>
          <Link href="/search" className=' font-semibold font-mono'>Datasets</Link>
          <Link href="/stories" className=' font-semibold font-mono'>Stories</Link>
        </div>
      </section>
      <section className='flex flex-col mx-auto w-[90%]  h-full min-h-[60vh] my-auto'>
        <div className='flex justify-center '>
          <h3 className='bg-gradient-to-r from-blue-500 to-fuchsia-500 inline-block text-transparent bg-clip-text lg:text-5xl text-2xl tracking-tight font-mono'>Portal.js Ckan Backend</h3>
        </div>
        <div className='flex justify-center   mt-8'>
         <p className='text-xl lg:text-2xl tracking-tighter italic font-normal leading-3 font-serif'>Search ckan backend data catalog.</p>
        </div>

        <div className='flex lg:justify-center   mt-8  '>
          <div className='flex  focus-within:border-blue-300 bg-white rounded-full py-6 px-8  text-[20px] lg:w-[50%] w-full'>
            <input
              type="text"
              autoFocus
              id="buton"
              ref={ref}
              placeholder="Search for dataset...."
              className="placeholder:text-[#EFEFEF] bg-white placeholder:leading-[1.569rem] leading-[1.569rem] focus:outline-none w-full "
              onKeyPress={(e) => {
                e.key === "Enter" ? handleclick(e) : null;
              }}
            />
            <button
              className="ml-auto relative 2sm:w-6 sm:w-6 sm:h-6 w-4 h-4 top-[0.25rem] md:top-0"
              onClick={handleclick} 
              >
              <Image
                src={"/images/search.svg"}
                alt="search"
                layout="fill"
                className="relative  w-full text-[#000000]"
              />
            </button>
          </div>
        </div>

      </section>
    </main>
  );
}

import React from 'react'
import path from 'path'
import { promises as fs } from 'fs';
import Link from 'next/link';
import parse from '../../lib/markdown';
import { arrayBuffer } from 'stream/consumers';

export const getStaticProps = async (context) => { 
  const contentDir = path.join(process.cwd(), '/content/');
  const contentFolders = await fs.readdir(contentDir, 'utf8');

  const mdTags = await Promise.all(contentFolders.map(async (folder: string) => {
    const md = await fs.readFile(
      `${process.cwd()}/content/${folder}`,
      'utf8'
    );
    const { mdxSource, frontMatter } = await parse(md, '.mdx', {});
    return {...frontMatter, file: folder}; 
  }));
  return {
    props: {
      mdTags: JSON.stringify(mdTags),
    },
  };
}

export default function index({ mdTags }) {
  mdTags = JSON.parse(mdTags);
  return (
    <main className="flex min-h-screen flex-col bg-zinc-900 bg-gradient-conic-h">
      <section className='flex mx-auto w-[90%]  p-4'>
        <div className='flex items-center justify-center p-4 rounded-2xl bg-black'><span className='text-white font-bold'>β</span></div>
        <div className='flex shrink items-center justify-center grow gap-x-8'>
          <Link href="/" className='font-semibold font-mono'>Home</Link>
          <Link href="/search" className=' font-semibold font-mono'>Datasets</Link>
          <Link href="/stories" className=' font-semibold font-mono'>Stories</Link>
        </div>
      </section>
      <section className="bg-white my-4 rounded-lg mt-16 mx-auto w-[90%] p-4" >
        <div className='flex lg:ml-56 2xl:ml-80'>
          <h1 className="text-4xl font-bold font-mono">./Stories</h1>
        </div>
        <div className='flex flex-col lg:ml-60 2xl:ml-96 ml-10 mt-12'>
            {mdTags.map((folder) => (
              <>
                <div className='flex flex-col mb-4'>
                  <Link href={`/stories/${folder?.file.split('.')[0]}`} className='font-semibold font-mono hover:bg-blue-50'>.{folder?.title.slice(0, 100)}</Link>
                  <span className='text-sm text-gray-500 ml-2'>author: { folder?.authors[0] }</span>
                </div>

              </>
            ))}
          </div>
      </section>
    </main>
  )
}

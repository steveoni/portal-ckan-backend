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
import { useRouter } from "next/router";

const backend_url = getConfig().publicRuntimeConfig.DMS;

export async function getServerSideProps() {
  const ckan = new CKAN(backend_url);
  const groups = await ckan.getGroupsWithDetails();
  const orgs = await ckan.getOrgsWithDetails();
  return {
    props: {
      groups,
      orgs,
    },
  };
}

export default function Home({
  orgs,
  groups,
}: {
  orgs: Organization[];
  groups: Group[];
  }) {
  const router = useRouter();
  const { q } = router.query;
  const ckan = new CKAN(backend_url);
  const [options, setOptions] = useState<PackageSearchOptions>({
    offset: 0,
    limit: 5,
    tags: [],
    groups: [],
    orgs: [],
    query: q as string,
  });

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

      <section className='mt-16 mx-auto w-[90%] p-4'>
        <DatasetSearchForm
        options={options}
        setOptions={setOptions}
        groups={groups}
        orgs={orgs}
        />
        <div className="bg-white p-8 my-4 rounded-lg">
          <ListOfDatasets options={options} setOptions={setOptions} ckan={ckan} />{' '}
        </div>
      </section>
      
    </main>
  );
}

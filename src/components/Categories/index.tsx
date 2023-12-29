import Link from 'next/link';

const Categories = () => {
  return (
    <section>
      <div className='container'>
        <div className='grid grid-cols-3 grid-rows-2 gap-5'>
          <Link className='category-item category-servers h-[200px]' href={''}>
            <h1 className='relative top-1/2 -translate-y-1/2 text-white text-5xl font-bold'>
              <small className='block text-white text-2xl font-bold'>
                Virtuální servery
              </small>
              PERFORMANCE
            </h1>
          </Link>
          <Link className='category-item category-servers h-[200px]' href={''}>
            <h1 className='relative top-1/2 -translate-y-1/2 text-white text-5xl font-bold'>
              <small className='block text-white text-2xl font-bold'>
                Virtuální servery
              </small>
              BUDGET
            </h1>
          </Link>
          <Link
            className='category-item category-servers h-[200px] col-span-2 row-start-2'
            href={''}
          >
            <h1 className='relative top-1/2 -translate-y-1/2 text-white text-6xl font-bold'>
              Dedikované servery
            </h1>
          </Link>
          <Link
            className='category-item category-minecraft row-span-2'
            href={''}
          >
            <h1 className='relative top-1/2 -translate-y-1/2 text-white text-7xl font-bold'>
              Minecraft servery
            </h1>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;

/* ts-expect-error Async Server Component */
import CommonPagesLayout from '@/app/layouts/commonPagesLayout';
import Image from 'next/image';
import Link from 'next/link';

async function getData(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=a13358bebd02c9fa5bbb19b0a3b42f36`,
    { cache: 'no-store' }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const SignleMovieDetails = async ({ params }: any) => {
  const { id } = params;
  const movie = await getData(id);
  const {
    title,
    overview,
    production_companies,
    backdrop_path,
    genres,
    status,
  } = movie;
  const imagePath = 'https://image.tmdb.org/t/p/original';

  return (
    <CommonPagesLayout>
      <div className="flex flex-col justify-center items-center">
        <div className="min-h-screen flex flex-col lg:flex-row mt-8 lg:gap-x-16 lg:items-center gap-y-6">
          <Image
            src={imagePath + backdrop_path}
            alt={title}
            height="400"
            width="400"
            className="w-full lg:w-5/6 rounded-md lg:rounded-none"
            data-aos="zoom-in"
            data-aos-duration="4500"
          />
          <div
            className="bg-slate-300 text-slate-600 rounded-md shadow-sm p-8 relative w-full"
            data-aos="zoom-in"
            data-aos-duration="4500"
          >
            <h3 className="text-4xl font-semibold text-center">{title} </h3>
            <div className="text-center text-red-600 font-semibold">
              <span className="text-xs mb-14">{`A film by ${production_companies?.[0]?.name}`}</span>
            </div>
            <span
              style={{
                position: 'absolute',
                top: '20px',
                left: '10px',
                textAlign: 'center',
                padding: '2px',
                background: '#2faa58',
                color: '#fff',
                transform: 'rotate(-45deg) translateY(-15px) translateX(-5px)',
                textShadow: ``,
              }}
              className="rounded-lg text-xs"
            >
              {status}
            </span>{' '}
            <div className="my-6 mx-auto text-center">
              <p className="">{overview}</p>
            </div>
            <div className="flex justify-center gap-x-3">
              {genres?.map((g: { id: string; name: string }) => (
                <span
                  key={g.id}
                  className="bg-indigo-500 text-white px-1 py-0.5 text-xs rounded-md"
                >
                  {g.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        <Link href="/movies">
          <button className="bg-indigo-600 text-white p-4 text-center rounded-md my-6 lg:mb-32">
            Back to Movies
          </button>
        </Link>
      </div>
    </CommonPagesLayout>
  );
};

export default SignleMovieDetails;

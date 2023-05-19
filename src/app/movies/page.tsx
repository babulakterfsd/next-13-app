/* ts-expect-error Async Server Component */
import Movie from '@/components/movie';
import { CustomMovie } from '@/types/global.types';
import CommonPagesLayout from '../layouts/commonPagesLayout';

async function getData() {
  const res = await fetch(
    'https://api.themoviedb.org/3/movie/top_rated?api_key=a13358bebd02c9fa5bbb19b0a3b42f36'
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json()
}

const page = async () => {
  const data = await getData();
  const movies = data.results;

  return (
    <CommonPagesLayout>
      <div className="min-h-screen">
        <div
          className="grid grid-cols-12 lg:gap-x-4 overflow-y-auto "
          data-aos="zoom-in"
          data-aos-duration="4500"
        >
          <div className="col-span-12 lg:col-span-3 bg-slate-600 text-white py-10 flex flex-col gap-y-3 text-center h-96 my-10 rounded-md">
            <span className="hover:text-indigo-400 cursor-pointer">
              Popular
            </span>
            <span className="hover:text-indigo-400 cursor-pointer">
              Top Rated
            </span>
          </div>
          <div className="col-span-12 lg:col-span-9 grid lg:grid-cols-4 gap-6 my-6 lg:my-12 ">
            {movies?.slice(0, 100)?.map((singleMovie: CustomMovie) => {
              const { id, title, poster_path, release_date } = singleMovie;

              return (
                <Movie
                  key={id}
                  id={id}
                  title={title}
                  poster_path={poster_path}
                  release_date={release_date}
                />
              );
            })}
          </div>
        </div>
      </div>
    </CommonPagesLayout>
  );
};

export default page;

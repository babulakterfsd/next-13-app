import { MovieProps } from '@/types/global.types';
import Image from 'next/image';
import Link from 'next/link';

const Movie = ({ id, title, poster_path, release_date }: MovieProps) => {
  const imagePath = `https://image.tmdb.org/t/p/original${poster_path}`;

  return (
    <div
      className="bg-slate-500 text-white rounded-md"
      data-aos="zoom-in"
      data-aos-duration="4500"
    >
      <div className="overflow-hidden">
        <Link href={`/movies/${id}`}>
          <Image
            src={imagePath}
            alt={title}
            height="500"
            width="500"
            className="h-52 w-full object-cover hover:cursor-pointer hover:scale-125 transition-all"
          />
        </Link>
      </div>
      <div className="px-4 text-white rounded-t-full pb-4">
        <h3 className="text-sm font-semibold mt-4 text-center">{title}</h3>
        <p className="text-xs text-center">{`(${release_date})`}</p>
      </div>
    </div>
  );
};

export default Movie;

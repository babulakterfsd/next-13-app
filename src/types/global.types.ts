export type MovieProps = {
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
  overview?: string;
  backdrop_path?: string;
  production_companies?: [
    {
      name: string;
    }
  ];
  status?: string;
  genres?: [];
};

export type CustomMovie = {
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
};

export type Movies = {
  movies: MovieProps[];
};
export type MovieDetails = {
  movieDetails: MovieProps;
};
export type SingleMovie = {
  movie: MovieProps;
};
export type LayoutType = {
  children: React.ReactNode;
};

export type UserType = {
  name: string;
  id: string;
  email: string;
  phone: string;
  website: string;
};
export type User = {
  user: UserType;
};
export type Users = {
  users: UserType[];
};
export type TodoType = {
  id: string;
  title: string;
  completed: boolean;
};
export type Todos = {
  todos: TodoType[];
};
export type Todo = {
  todo: TodoType;
};

export type Employee = {
  id: number;
  name: string;
  position: string;
  salary: number;
  comment: string;
};

export type Employees = {
  employees: Employee[];
};

export type DataFromDB = {
  message: string;
  data?: any;
};

export type Member = {
  _id: string;
  name: string;
  email: string;
  salary: number;
  comment: string;
};

export type Members = {
  members: Member[];
};

declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
declare module '*.css';
declare module '*.js';
declare module '*.jsx';
declare module '*.ts';
declare module '*.tsx';

declare namespace React {
  type StatelessComponent<P> = React.FunctionComponent<P>;
}

export type ArrayOfObjects<T> = T[];

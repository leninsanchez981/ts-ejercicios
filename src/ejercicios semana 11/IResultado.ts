export interface IResultado<T> {
  ok: boolean;
  mensaje: string;
  data?: T;
}

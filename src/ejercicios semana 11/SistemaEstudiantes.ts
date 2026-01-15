import { Estudiante } from "./Estudiante";
import { IResultado } from "./IResultado";

export class SistemaEstudiantes {
  private estudiantes: Estudiante[] = [];

  agregar(est: Estudiante): IResultado<Estudiante> {
    for (let e of this.estudiantes) {
      if (e.id === est.id) {
        return { ok: false, mensaje: "ID repetido" };
      }
    }

    if (est.edad < 15 || est.edad > 80) {
      return { ok: false, mensaje: "Edad inválida" };
    }

    if (est.promedio < 0 || est.promedio > 10) {
      return { ok: false, mensaje: "Promedio inválido" };
    }

    this.estudiantes.push(est);
    return { ok: true, mensaje: "Estudiante agregado", data: est };
  }

  listar(): Estudiante[] {
    return this.estudiantes;
  }

  buscarPorId(id: number): IResultado<Estudiante> {
    for (let e of this.estudiantes) {
      if (e.id === id) {
        return { ok: true, mensaje: "Estudiante encontrado", data: e };
      }
    }
    return { ok: false, mensaje: "Estudiante no existe" };
  }

  actualizarPromedio(id: number, nuevoPromedio: number): IResultado<Estudiante> {
    if (nuevoPromedio < 0 || nuevoPromedio > 10) {
      return { ok: false, mensaje: "Promedio inválido" };
    }

    for (let e of this.estudiantes) {
      if (e.id === id) {
        e.promedio = nuevoPromedio;
        return { ok: true, mensaje: "Promedio actualizado", data: e };
      }
    }
    return { ok: false, mensaje: "Estudiante no existe" };
  }

  cambiarEstado(id: number, activo: boolean): IResultado<Estudiante> {
    for (let e of this.estudiantes) {
      if (e.id === id) {
        e.activo = activo;
        return { ok: true, mensaje: "Estado actualizado", data: e };
      }
    }
    return { ok: false, mensaje: "Estudiante no existe" };
  }

  listarActivos(): Estudiante[] {
    const activos: Estudiante[] = [];
    for (let e of this.estudiantes) {
      if (e.activo) {
        activos.push(e);
      }
    }
    return activos;
  }

  promedioGeneral(): number {
    let suma = 0;
    for (let e of this.estudiantes) {
      suma += e.promedio;
    }
    return this.estudiantes.length === 0 ? 0 : suma / this.estudiantes.length;
  }
}

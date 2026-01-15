import { SistemaEstudiantes } from "./SistemaEstudiantes";
import { Estudiante } from "./Estudiante";

export function mostrarMenu(): void {
  console.log("===== SISTEMA DE ESTUDIANTES =====");
}

export function ejecutarDemo(sistema: SistemaEstudiantes): void {
  sistema.agregar(new Estudiante(1, "Ana", 20, "Ingeniería", true, 8.5));
  sistema.agregar(new Estudiante(2, "Luis", 22, "Medicina", true, 9));
  sistema.agregar(new Estudiante(3, "Carla", 19, "Derecho", true, 7));

  console.log("Todos:", sistema.listar());
  console.log("Buscar ID 2:", sistema.buscarPorId(2));
  console.log("Actualizar promedio:", sistema.actualizarPromedio(2, 9.5));
  console.log("Cambiar estado:", sistema.cambiarEstado(3, false));
  console.log("Activos:", sistema.listarActivos());
  console.log("Promedio general:", sistema.promedioGeneral());
}

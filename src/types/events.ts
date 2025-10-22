
export interface Evento {
  id: number;
  nome: string;
  data: string; // Mantemos como string, pois é o formato do JSON
  local: string;
}
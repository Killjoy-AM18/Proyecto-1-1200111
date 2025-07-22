export interface User{
    ctipou?: number;
    descripcion?: string;
    estado?: string;
  }

export interface ventas{
    idempresa?: number | null;
    pais?: string | null;
    nombre?: string | null;
    direccion?: string | null;
    rtn?: string | null;
    telefono?: string | null;
    correo?: string | null;
    contacto?: string | null;
    fecha_creacion?: Date | null;
    estado?: string;
  }

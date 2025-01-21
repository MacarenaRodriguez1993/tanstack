import { FaEdit, FaSave } from "react-icons/fa";
import { Table } from "../components/Table"
import { membersColumns as initialColumns, membersData as initialData } from "../data/membersData"
import { useState } from "react";

export const MembersPage = () => {
    const [data, setData] = useState(initialData); // Estado para los datos de la tabla
  const [editingRowId, setEditingRowId] = useState(null); // ID de la fila en edición

  // Manejar el clic en el botón de editar/guardar
  const handleEditClick = (id) => {
    if (editingRowId === id) {
      setEditingRowId(null); // Guardar y salir del modo edición
    } else {
      setEditingRowId(id); // Activar el modo edición para esta fila
    }
  };

  // Manejar cambios en los inputs/selects
  const handleInputChange = (id, key, value) => {
    setData((prevData) =>
      prevData.map((row) =>
        row.id === id ? { ...row, [key]: value } : row
      )
    );
  };

  // Crear columnas con lógica de edición
  const columnsWithEdit = initialColumns.map((col) => {
    if (col.accessorKey === "name" || col.accessorKey === "count") {
      return {
        ...col,
        cell: ({ row }) => {
          const isEditing = editingRowId === row.original.id;
          return isEditing ? (
            <input
              type="text"
              value={row.original[col.accessorKey]}
              onChange={(e) =>
                handleInputChange(row.original.id, col.accessorKey, e.target.value)
              }
              style={{
                width: "100%",
                padding: "4px",
                fontSize: "14px",
                boxSizing: "border-box",
              }}
            />
          ) : (
            <span style={{ display: "block", width: "100%", textAlign: "left" }}>
              {row.original[col.accessorKey]}
            </span>
          );
        },
      };
    }

    if (
      col.accessorKey === "hoodies" ||
      col.accessorKey === "tShirt" ||
      col.accessorKey === "pants"
    ) {
      return {
        ...col,
        cell: ({ row }) => {
          const isEditing = editingRowId === row.original.id;
          const options = ["","S", "M", "L", "XL"];
          return isEditing ? (
            <select
              value={row.original[col.accessorKey]}
              onChange={(e) =>
                handleInputChange(row.original.id, col.accessorKey, e.target.value)
              }
              style={{
                width: "100%",
                padding: "4px",
                fontSize: "14px",
                boxSizing: "border-box",
              }}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <span style={{ display: "block", width: "100%", textAlign: "left" }}>
              {row.original[col.accessorKey]}
            </span>
          );
        },
      };
    }

    if (col.accessorKey === "action") {
      return {
        ...col,
        cell: ({ row }) => {
          const isEditing = editingRowId === row.original.id;
          return (
            <button
              onClick={() => handleEditClick(row.original.id)}
              style={{
                backgroundColor: isEditing ? "#28a745" : "#007bff",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              {isEditing ? <FaSave color="#fff" /> : <FaEdit color="#fff" />}
            </button>
          );
        },
      };
    }

    return col;
  });
  return (
    <div>
      <h1>Members</h1>
      <Table data={data} columns={columnsWithEdit} />
    </div>
  )
}

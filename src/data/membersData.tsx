export const membersData = [
    {
        id: 1,
        name: "Juan Perez",
        count: 2,
        hoodies: "L",
        tShirt: "XL",
        pants: "",
        dueDate: "2025-01-31",
        numberOfPayments: 1,
        installments: "20.000",
        action: "action",
        },
        {
        id: 2,
        name: "Maria Lopez",
        count: 3,
        hoodies: "S",
        tShirt: "XS",
        pants: "S",
        dueDate: "2025-01-31",
        numberOfPayments: 1,
        installments: "30.000",
        action: "action",
        },
        {
        id: 3,
        name: "Pedro Gomez",
        count: 1,
        hoodies: "XL",
        tShirt: "",
        pants: "",
        dueDate: "2025-01-31",
        numberOfPayments: 1,
        installments: "10.000",
        action: "action",
        },
        {
        id: 4,
        name: "Ana Rodriguez",
        count: 3,
        hoodies: "M",
        tShirt: "M",
        pants: "M",
        dueDate: "2025-01-31",
        numberOfPayments: 1,
        installments: "30.000",
        action: "action",
        },
        {
        id: 5,
        name: "Carlos Perez",
        count: 1,
        hoodies: "",
        tShirt: "",
        pants: "M",
        dueDate: "2025-01-31",
        numberOfPayments: 1,
        installments: "10.000",
        action: "action",
    }
];

export const membersColumns = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Nombre y apellido" },
  { accessorKey: "count", header: "Cantidad" },
  { accessorKey: "hoodies", header: "Buzo" },
  { accessorKey: "tShirt", header: "Remera" },
  { accessorKey: "pants", header: "Pantalon" },
  { accessorKey: "dueDate", header: "Vto" },
  { accessorKey: "numberOfPayments", header: "Cant.Cuotas" },
  { accessorKey: "installments", header: "Cuotas" },
  {
    accessorKey: "action",
    header: "Acciones",
    cell: ({ row }) => (
      <span>Acción</span>
    )
  },
];

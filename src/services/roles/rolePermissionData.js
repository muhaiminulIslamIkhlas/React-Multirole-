export default function getRolePermissionData() {
  return [
    {
      id: 1,
      name: "Admin",
      permissions: [],
    },
    {
      id: 2,
      name: "Super Admin",
      permissions: [
        {
          id: 1,
          name: "create_product",
        },
        {
          id: 2,
          name: "edit_product",
        },
      ],
    },
    {
      id: 3,
      name: "Cashier",
      permissions: [
        {
          id: 5,
          name: "view_account",
        },
        {
          id: 6,
          name: "create_account",
        },
      ],
    },
  ];
}

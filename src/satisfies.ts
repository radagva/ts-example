type Employee = {
  id: string | number;
  name: string;
};

type RouteConfig = {
  path: string;
  isAuthRequired: boolean | ((employee: Employee) => boolean);
};

const routes = {
  usersList: {
    path: "/users",
    isAuthRequired: true,
  },
  userDashboard: {
    path: "/users/:id",
    isAuthRequired(employee) {
      return employee.id === 1;
    },
  },
} satisfies Record<string, RouteConfig>;

const canGoToRoute = routes.userDashboard.isAuthRequired({
  id: 2,
  name: "Milo",
});

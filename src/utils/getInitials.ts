export const getInitials = (name: string, lastName?: string) => {
  const nameInitial = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  const lastNameInitial = lastName
    ? lastName
        .split(" ")
        .map((part) => part[0])
        .join("")
        .toUpperCase()
    : "";
  return `${nameInitial}${lastNameInitial}`;
};

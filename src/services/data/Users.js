export const Users = () =>
    [
        {
            login: "SSS",
            password: "01",
            email: "and.sw@2yandex.ru",
            role: "Соискатель",
        },

    ].map((item, index) => ({
        id: index,
        ...item,
    }));
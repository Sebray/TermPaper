export const Specializations = () =>
    [
        {
            name: 'Разработка ПО'
        },
        {
            name: 'Администрирование'
        },
        {
            name: 'Аналитика'
        },
        {
            name: 'Тестирование'
        },
    ].map((item, index) => ({
        id: index,
        ...item,
    }));
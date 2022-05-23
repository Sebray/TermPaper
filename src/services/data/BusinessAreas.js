export const BusinessAreas = () =>
    [
        {
            name: 'Дэвопс инженер',
            specialization: 'Администрирование',
        },
        {
            name: 'Системный администратор',
            specialization: 'Администрирование',
        },
        {
            name: 'Администратор сетей',
            specialization: 'Администрирование',
        },
        {
            name: 'UX-тестировщик',
            specialization: 'Тестирование',
        },
        {
            name: 'Инженер по ручному тестированию',
            specialization: 'Тестирование',
        },
        {
            name: 'Бэкенд разработчик',
            specialization: 'Разработка ПО',
        },
        {
            name: 'Фронтенд разработчик',
            specialization: 'Разработка ПО',
        },
        {
            name: 'Веб аналитик',
            specialization: 'Аналитика',
        },
        {
            name: 'Бизнес-аналитик',
            specialization: 'Аналитика',
        },
    ].map((item, index) => ({
        id: index,
        ...item,
    }));
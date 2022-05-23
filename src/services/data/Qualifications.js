export const Qualifications = () =>
    [
        {
            name: 'Стажёр (Intern)'
        },
        {
            name: 'Младший (Junior)'
        },
        {
            name: 'Средний (Middle)'
        },
        {
            name: 'Старший (Senior)'
        },
        {
            name: 'Ведущий (Lead)'
        },
    ].map((item, index) => ({
        id: index,
        ...item,
    }));
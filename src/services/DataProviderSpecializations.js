import { Specializations } from './data/Specializations';

export class DataProviderSpecializations {

    static specializations = Specializations();


    static findSpecializationByIdPredicate = (specialization, id) => specialization.id === id;


    static getAllSpecializations = () =>
        Promise.resolve(
            this.specializations.map((specialization) => (specialization.name ))
        );

    static updateSpecialization = (newSpecializationData) => {
        return new Promise((resolve, reject) => {
            const specializationIndex = this.specializations.findIndex((specialization) =>
                this.findSpecializationByIdPredicate(specialization, newSpecializationData.id)
            );

            if (specializationIndex < 0) {
                reject(`Specialization с id ${newSpecializationData.id} не найдено`);
            }

            this.specializations[specializationIndex] = newSpecializationData;
            resolve(specializationIndex);
        });
    };



    static putSpecialization = (newSpecialization) => {
        const newSpecializationIndex = this.specializations.push({
            ...newSpecialization,
            id: new Date(),
        });

        return Promise.resolve(newSpecializationIndex);
    };


    static deleteSpecialization = (id) => {
        return new Promise((resolve, reject) => {
            const index = this.specializations.findIndex((specialization) =>
                this.findSpecializationByIdPredicate(specialization, id)
            );

            if (index < 0) {
                reject(`Specialization с id ${id} не найдено`);
            }

            this.specializations.splice(index, 1);
            resolve(this.specializations.length);
        });
    };



}
import { BusinessAreas } from './data/BusinessAreas';

export class DataProviderBusinessAreas {

    static businessAreas = BusinessAreas();


    static findBusinessAreaByIdPredicate = (businessArea, id) => businessArea.id === id;
    static findBusinessAreaBySpecializationPredicate = (businessArea, spec) => businessArea.specialization === spec;


    static getBusinessAreaBySpecialization = (spec) =>
        new Promise((resolve, reject) => {
            const result = this.businessAreas.find((businessArea) =>
                this.findBusinessAreaBySpecializationPredicate(businessArea, spec)
            );

            if (!result) {
                reject(`businessArea со специализацией ${spec} не найдено`);
            }

            resolve(result);
        });

    static updateBusinessArea = (newBusinessAreaData) => {
        return new Promise((resolve, reject) => {
            const businessAreaIndex = this.businessAreas.findIndex((businessArea) =>
                this.findBusinessAreaByIdPredicate(businessArea, newBusinessAreaData.id)
            );

            if (businessAreaIndex < 0) {
                reject(`businessArea с id ${newBusinessAreaData.id} не найдено`);
            }

            this.businessAreas[businessAreaIndex] = newBusinessAreaData;
            resolve(businessAreaIndex);
        });
    };



    static putBusinessArea = (newBusinessArea) => {
        const newBusinessAreaIndex = this.businessAreas.push({
            ...newBusinessArea,
            id: new Date(),
        });

        return Promise.resolve(newBusinessAreaIndex);
    };

    static deleteBusinessArea = (id) => {
        return new Promise((resolve, reject) => {
            const index = this.businessAreas.findIndex((businessArea) =>
                this.findBusinessAreaByIdPredicate(businessArea, id)
            );

            if (index < 0) {
                reject(`businessArea с id ${id} не найдено`);
            }

            this.businessAreas.splice(index, 1);
            resolve(this.businessAreas.length);
        });
    };
}
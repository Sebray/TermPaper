import { Qualifications } from './data/Qualifications';

export class DataProviderQualifications {

    static qualifications = Qualifications();


    static findQualificationByIdPredicate = (qualification, id) => qualification.id === id;


    static getAllQualifications = () =>
        Promise.resolve(
            this.qualifications.map((qualification) => (qualification.name ))
        );

    static updateQualification = (newQualificationData) => {
        return new Promise((resolve, reject) => {
            const qualificationIndex = this.qualifications.findIndex((qualification) =>
                this.findQualificationByIdPredicate(qualification, newQualificationData.id)
            );

            if (qualificationIndex < 0) {
                reject(`Qualification с id ${newQualificationData.id} не найдено`);
            }

            this.qualifications[qualificationIndex] = newQualificationData;
            resolve(qualificationIndex);
        });
    };



    static putQualification = (newQualification) => {
        const newQualificationIndex = this.qualifications.push({
            ...newQualification,
            id: new Date(),
        });

        return Promise.resolve(newQualificationIndex);
    };


    static deleteQualification = (id) => {
        return new Promise((resolve, reject) => {
            const index = this.qualifications.findIndex((qualification) =>
                this.findQualificationByIdPredicate(qualification, id)
            );

            if (index < 0) {
                reject(`Qualification с id ${id} не найдено`);
            }

            this.qualifications.splice(index, 1);
            resolve(this.qualifications.length);
        });
    };



}
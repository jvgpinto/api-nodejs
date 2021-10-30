/**
 * Data Model Interfaces
 */


 import { BaseSchool, School } from "./school.interface";
 import { Schools } from "./schools.interface";
/**
 * In-Memory Store
 */

 let schools: Schools = {
    1: {
      id: 1,
      name: "École Armand-Frappier",
      description: "desdription test 1",
      adresse:"295 Ch Sainte catherine",
      city:"Saint-Constant",
      province:"Quebec",
      postalCode: "J5A 1V7",
      coordinates:{latitude:45.3851823,longitude:-73.5992176},
      image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png",
      website:"https://delaquarelle.cssdgs.gouv.qc.ca/",
      phone:"+15143808899",
      niveau:"primaire"
    },
    2: {
        id: 2,
        name: "École Félix-Leclerc",
        description: "desdription test 1",
        adresse:"161 Bd Monchamp",
        city:"Saint-Constant",
        province:"Quebec",
        postalCode: "J5A 2K8",
        coordinates:{latitude:45.3867577,longitude:-73.6002958},
        image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png",
        website:"https://felix-leclerc.cssdgs.gouv.qc.ca/",
        phone:"+15143808899",
        niveau:"primaire"
    },
    3: {
        id: 3,
        name: "École Piché-Dufrost",
        description: "desdription test 1",
        adresse:"26 Ch Sainte catherine",
        city:"Saint-Constant",
        province:"Quebec",
        postalCode: "J5A 1G2",
        coordinates:{latitude:45.3948992,longitude:-73.6023715},
        image: "http://piche-dufrost.cssdgs.gouv.qc.ca/wp-content/uploads/sites/47/2014/07/PicheDufrost_nom+logo.jpg",
        website:"https://piche-dufrost.cssdgs.gouv.qc.ca",
        phone:"+15143808899",
        niveau:"primaire"
    }
  };

/**
 * Service Methods
 */

 export const findAll = async (): Promise<School[]> => Object.values(schools);

 export const find = async (id: number): Promise<School> => schools[id];

 export const create = async (newSchool: BaseSchool): Promise<School> => {
    const id = new Date().valueOf();
  
    schools[id] = {
      id,
      ...newSchool,
    };
  
    return schools[id];
  };

  export const update = async (
    id: number,
    schoolUpdated: BaseSchool
  ): Promise<School | null> => {
    const item = await find(id);
  
    if (!item) {
      return null;
    }
  
    schools[id] = { id, ...schoolUpdated };
  
    return schools[id];
  };
  export const remove = async (id: number): Promise<null | void> => {
    const school = await find(id);
  
    if (!school) {
      return null;
    }
  
    delete schools[id];
  };
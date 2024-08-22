import { isEmpty, pick, keys } from 'lodash';
// @flow
export class Brand {
    static getCollectionName() {
        return 'Brand';
    }

    brandName: string = '';
    brandImage: string = '';

}

(Brand as any).schema = {
    name: 'Brand',
    primaryKey: 'id',
    properties: {
        brandName: 'string',
        brand: 'string',
    },
};

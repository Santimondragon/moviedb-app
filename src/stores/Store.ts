import {
    observable,
    action,
    computed
} from 'mobx';

class Store {
    @observable name: string = "Nombre";

    @action aFunction(value: any) {
        this.name = value;
    }

}

export const store = new Store();
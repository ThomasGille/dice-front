/**
 * Created by Epulapp on 02/05/2017.
 */
import { Model } from './model.interface';

export class Dice implements Model {
    constructor(id: String, name: String, number: number, type: number, bonus: number) {
        this._id = id;
        this.name = name;
        this.number = number;
        this.type = type;
        this.bonus = bonus;
    }

    hydrateFromJSON(json: any) : Dice{
        this._id = json._id;
        this.name = json.name;
        this.number = json.number;
        this.type = json.type;
        this.bonus = json.bonus;
        return this;
    }

    _id: String;
    name: String;
    number: number;
    type: number;
    bonus: number;
}
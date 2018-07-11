/**
 * Created by Epulapp on 02/05/2017.
 */
import { Model } from './model.interface';
import { Equal } from './equal.interface';

export class Dice implements Model, Equal {
    constructor(id: String, name: String, number: number, type: number, bonus: number) {
        this._id = id;
        this.name = name;
        this.number = number;
        this.type = type;
        this.bonus = bonus;
        this.objective = null;
    }

    hydrateFromJSON(json: any) : Dice{
        this._id = json._id;
        this.name = json.name;
        this.number = json.number;
        this.type = json.type;
        this.bonus = json.bonus;
        this.objective = json.objective;
        return this;
    }

    equals(dice: Dice): boolean {
        return (
            this.name === dice.name &&
            this.bonus === dice.bonus &&
            this.type === dice.type &&
            this.number === dice.number &&
            this.objective === dice.objective);
    }

    _id: String;
    name: String;
    number: number;
    type: number;
    bonus: number;
    objective : number;
}
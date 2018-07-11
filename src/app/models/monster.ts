/**
 * Created by Epulapp on 02/05/2017.
 */
import { Dice } from './dice';
import { Model } from './model.interface';
import { Equal } from "app/models/equal.interface";

export class Monster implements Model, Equal {
    hydrateFromJSON(json: any) : Monster {
        this._id = json._id;
        this.name = json.name;
        this.health = json.health;
        this.x = json.x;
        this.y = json.y;
        this.pictureLink = json.pictureLink;
        this._dices = [];
        if(json._dices) {
            json._dices.forEach(dice => {
                this._dices.push(new Dice(null, null, null, null, null).hydrateFromJSON(dice));
            });
        }
        return this;
    }

    equals(monster: Monster): boolean {
        return (
            this.name === monster.name &&
            this.health === monster.health &&
            this.x === monster.x &&
            this.y === monster.y &&
            this.pictureLink === monster.pictureLink);
    }
    constructor(id, name) {
        this._id = id;
        this.name = name;
        this.health = 1;
        this.x = 0;
        this.y = 0;
        this.pictureLink = 'stringLink';
    }
    _id: number;
    name: String;
    health : number;
    _dices: Dice [];
    x: number;
    y: number;
    pictureLink: String;
}
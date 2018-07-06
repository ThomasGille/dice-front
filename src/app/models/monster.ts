/**
 * Created by Epulapp on 02/05/2017.
 */
import { Dice } from './dice';
import { Model } from './model.interface';

export class Monster implements Model {
    hydrateFromJSON(json: any) : Monster {
        throw new Error("Method not implemented.");
    }
    constructor(id, name, dices, x, y, pictureLink) {
        this._id = id;
        this.name = name;
        this.x = x;
        this.y = y;
        this.pictureLink = pictureLink;
    }
    _id: number;
    name: String;
    _dices: Dice [];
    x: number;
    y: number;
    pictureLink: String;
}
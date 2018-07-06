/**
 * Created by Epulapp on 02/05/2017.
 */
import { Dice } from './dice';
import { Monster } from './monster';
import { Model } from './model.interface';


export class Game implements Model{
    constructor(id:String, name: String) {
        this._id = id;
        this.name = name;
    }

    hydrateFromJSON(json: any) : Game {
        this._id = json._id;
        this.name = json.name;
        this._dices = [];
        json._dices.forEach(dice => {
            this._dices.push(new Dice(null, null, null, null, null).hydrateFromJSON(dice));
        });
        this._monsters = [];
        json._monsters.forEach(monster => {
            this._monsters.push(new Monster(null, null, null, null, null, null).hydrateFromJSON(monster));
        });
        return this;
    }

    _id: String;
    name: String;
    _dices: Dice [];
    _monsters: Monster [];
}
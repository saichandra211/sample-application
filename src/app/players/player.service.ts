import { Injectable } from '@angular/core'
import { Player } from '../models/player.model';

@Injectable()
export class PlayerService{
    private listPlayers: Player[]= [
        {
          id: 1,
          name: "Virat Kohli",
          gender: "Male",
          image: "assets/male.png",
          matches: 200,
          role: "Batsmen",
          runs: 10051,
          teams: "1",
      },
    
      {
        id: 2,
        name: "MS Dhoni",
        gender: "Male",
        image: "assets/male.png",
        matches: 275,
        role: "WK-Batsmen",
        runs: 12526,
        teams: "1",
      },
    
      {
      id: 3,
      name: "Misbah Ul Haq",
      gender: "Male",
      image: "assets/male.png",
      matches: 300,
      role: "Batsmen",
      runs: 9000,
      teams: "2",
      },
    
      {
        id: 4,
        name: "Chris Gayle",
        gender: "Male",
        image: "assets/male.png",
        matches: 172,
        role: "Batsmen",
        runs: 7025,
        teams: "4",
    },
    ];
    
    getPlayers(): Player[]{
        return this.listPlayers; 
    }

    save(player: Player){
        this.listPlayers.push(player);
    }
}
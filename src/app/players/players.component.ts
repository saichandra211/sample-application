import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player.model';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: Player[];
  constructor(private _playerService: PlayerService) { }

  ngOnInit() {
    this.players = this._playerService.getPlayers();
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Team } from '../../models/team.model';
import { Player } from '../../models/player.model';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-create-players',
  templateUrl: './create-players.component.html',
  styleUrls: ['./create-players.component.css']
})
export class CreatePlayersComponent implements OnInit {
  
  previewImage = false;
  player: Player = {
    id:null,
    name:null,
    gender: null,
    image: null,
    matches: null,
    role: null,
    runs: null,
    teams: null
  };

  teams: Team[] = [
    {id:1, teamName: "India"},
    {id:2, teamName: "Pakistan"},
    {id:3, teamName: "Sri Lanka"},
    {id:4, teamName: "West Indies"},
    {id:5, teamName: "Afghanisthan"},
    {id:6, teamName: "Bangladesh"},
    {id:7, teamName: "Australia"},
    {id:8, teamName: "New Zealand"},
    {id:9, teamName: "South Africa"},
    {id:10, teamName: "England"}
  ];
  
  
  constructor(private _playerService: PlayerService, private _router: Router) {

   }
  togglePhotoPreview(){
    this.previewImage = !this.previewImage;
  }
  ngOnInit() {
  }

  savePlayer(){
    this._playerService.save(this.player);
    this._router.navigate(['players']);
  }
}

import { Component } from '@angular/core';
import { users } from './interfaces.modules';

@Component({
	selector: 'ws-header',
	templateUrl: '../../../../templates/header.html',
})
export class WsHeader  { 
	name:string;
	userName:string;
	profilePictureSrc:string;
	profileURL:string;
	users:users[];
	
	constructor(){
		this.name = "Ayoub Omari";
		this.userName = "Ayoub Omari"
		this.profilePictureSrc = "ayoub.jpg";
		this.profileURL = "#";
		this.users = [
		{
			name: "Ivanka trump",
			UserName : "Ivanka trump",
			profilePictureSrc : "ivanka.jpg",
			profileURL : "#"
		},{
			name: "Donald trump",
			UserName : "Donald trump",
			profilePictureSrc : "trump.png",
			profileURL : "#"
		}
		];
	}
}

import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-page-reservation',
  templateUrl: './page-reservation.component.html',
  styleUrls: ['./page-reservation.component.css'],
  providers: [MessageService]
})
export class PageReservationComponent {

  selectedDate!: string;
  selectedTime!: string;
  times: string[] = [];
  show:boolean =false;
  isAvailable!: boolean;
  message: string ="";

  constructor(private apiService: ApiService) {
    for (let i = 8; i < 25; i++) {
      let valeur: string = i + ":00";
      let valeur2: string = i + ":30";
      this.times.push(valeur);
      this.times.push(valeur2);
    }
  }

  checkAvailability(): void {

    this.apiService.checkRoomAvailability(this.selectedDate, this.selectedTime).subscribe(
      response => {
        this.message = response.available ? 'The ressource is available on ' + this.selectedDate + ' at ' + this.selectedTime + '. You can start the reservation process': 'The ressource isn\'t available';
        this.isAvailable = response.available;
        this.show=true;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la vérification de disponibilité :', error);
      }
    );
  }
}






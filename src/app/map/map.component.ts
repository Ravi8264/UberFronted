import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';
import { RideService } from '../service/ride.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  map!: L.Map;
  startPlace!: string;
  endPlace!: string;
  routingControl!: L.Routing.Control;
  isTrue = true;
  fare :number=0
  rideRequeted=true;

  constructor(private rideService: RideService) {} // Inject RideService

  ngOnInit(): void {
    this.initMap();
    L.Marker.prototype.options.icon = L.icon({
      iconUrl: 'https://www.openstreetmap.org/assets/marker-green-2de0354ac458a358b9925a8b7f5746324122ff884605073e1ee602fe8006e060.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });
  }

  check(): void {
    this.isTrue = !this.isTrue;
    console.log('State toggled:', this.isTrue);
  }

  private initMap(): void {
    this.map = L.map('map').setView([28.6139, 77.2090], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    console.log('Map initialized.');
  }

async onSubmit(): Promise<void> {
  if (!this.startPlace || !this.endPlace) {
    console.warn('Please provide both start and end locations.');
    return;
  }

  try {
   
    const startCoords = await this.getCoordinates(this.startPlace);
    const endCoords = await this.getCoordinates(this.endPlace);

    if (startCoords && endCoords) {
     
      console.log('Coordinates retrieved.');
      this.addRoutingControl(startCoords, endCoords);
      this.sendRideRequest(startCoords, endCoords, 'WALLET'); // Payment method hardcoded to WALLET
    } else {
      console.warn('Unable to retrieve coordinates. Check your inputs.');
    }
  } catch (error) {
    // Narrow the type of error for safe property access
    if (error instanceof Error) {
      console.error('Error processing locations:', error.message);
    } else {
      console.error('An unknown error occurred:', error);
    }
  }
}


  private async getCoordinates(place: string): Promise<{ lat: number; lng: number } | null> {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(place)}&format=json`);
    const data = await response.json();

    if (data.length > 0) {
      return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
    }

    console.warn(`No results found for ${place}`);
    return null;
  }

  private addRoutingControl(startCoords: { lat: number; lng: number }, endCoords: { lat: number; lng: number }): void {
    if (this.routingControl) {
      this.map.removeControl(this.routingControl);
    }

    this.routingControl = L.Routing.control({
      waypoints: [
        L.latLng(startCoords.lat, startCoords.lng),
        L.latLng(endCoords.lat, endCoords.lng),
      ],
      routeWhileDragging: true,
    }).addTo(this.map);

    console.log('Route added to map.');
  }

  private sendRideRequest(startCoords: { lat: number; lng: number }, endCoords: { lat: number; lng: number }, paymentMethod: string): void {
    const rideRequest = {
      pickupLocation: {
        type: 'Point',
        coordinates: [startCoords.lng, startCoords.lat],  // Swap to [longitude, latitude]
      },
      dropOffLocation: {
        type: 'Point',
        coordinates: [endCoords.lng, endCoords.lat],  // Swap to [longitude, latitude]
      },
      paymentMethod,
    };
  
    this.rideService
      .requestRide(rideRequest.pickupLocation.coordinates, rideRequest.dropOffLocation.coordinates, paymentMethod)
      .subscribe({
        next: (response) => {
          this.click();
          this.fare = Math.round(response.data.fare);
          console.log('Ride requested successfully:', response);
        },
        error: (error) => {
          console.error('Ride request failed:', error.message || error);
        },
      });
  }
  
  click(){
    this.isTrue=!this.isTrue
  }


  rideRequetedByRider(){
    this.rideRequeted=!this.rideRequeted;
    console.log("ravi")
   setTimeout(() => {
    this.rideRequeted = !this.rideRequeted;
     }, 1000*60);
  }
}

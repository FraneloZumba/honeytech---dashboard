import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule para *ngFor y *ngIf

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule], // Asegúrate de importar CommonModule
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  currentTime: string = new Date().toLocaleTimeString();

  // Datos para los sensores de temperatura y humedad
  temperatureHumidity = {
    value: 22.5, // Temperatura en °C
    humidity: 65, // Humedad en %
    bars: [70, 50, 60, 55, 75, 80, 65, 60, 70, 80, 85, 90] // Ejemplo de barras para el gráfico
  };

  // Datos para la actividad de las abejas
  beeActivity = {
    value: 'Moderada',
    status: 'Nivel de actividad: Normal',
    bars: [60, 50, 40, 70, 60, 80, 50, 60, 70, 55, 65, 60] // Ejemplo de barras para el gráfico
  };

  // Datos sobre el peso de la colmena
  hiveWeight = {
    value: 12.5, // Peso de la colmena en kg
    progress: 80 // Progreso de la cosecha en %
  };

  // Alertas en tiempo real
  alerts = {
    value: 'Sin alertas',
    message: 'Todas las condiciones son estables. La temperatura y humedad son óptimas.'
  };

  // Mensaje del chatbot (esto puede ser dinámico más adelante)
  chatbotMessage: string = '¡Hola! ¿Cómo puedo ayudarte con la gestión de tu colmena hoy?';
}
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  public caroussel = [
    { id: 0, ischecked: true, src: './assets/clientes.png', name: 'carousel-1', text: ' Com o nosso software de gestão vai conseguir consultar com facilidade a sua lista de clientes, com todas as suas informações, como o número do seu processo.' },
    { id: 1, ischecked: false, src: './assets/processos.png', name: 'carousel-2', text: ' Vai poder consultar os processos da sua firma e a origem dos mesmos, e o seu estado. Como também os clientes a quem estão associados.' },
    { id: 2, ischecked: false, src: './assets/tarefas.png', name: 'carousel-3', text: 'Nesta aba do software vai conseguir ver as tarefas e a quem as mesmas estão definidas e o seu processo. Pode assim também criar outras tarefas.' },
  ];
  currentIndex: number = 0;
  currentValue = this.caroussel[this.currentIndex];

  click_right() {
    this.currentIndex = (this.currentIndex + 1) % this.caroussel.length;
    this.currentValue = this.caroussel[this.currentIndex];
  }
  click_left() {
    this.currentIndex = (this.currentIndex - 1 + this.caroussel.length) % this.caroussel.length;
    this.currentValue = this.caroussel[this.currentIndex];
  }
  current_slide(data:number){
    this.currentValue = this.caroussel[data];
  }
  constructor(private elementRef: ElementRef) {}  

  scrollToComponent() {
    this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
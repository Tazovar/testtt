import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  
  @Output()filterBodyEmiter: EventEmitter<any> = new EventEmitter()

  constructor(){}

  @ViewChild("form")form!: NgForm
  submit(form: NgForm) {
    const filterBody: any = {};
  
    Object.keys(form.controls).forEach(key => {
      const control = form.controls[key];
      
      if (control.value !== null && control.value !== '') {
        filterBody[key] = control.value;
      }
    });
  
    if (Object.keys(filterBody).length > 0) {
      this.filterBodyEmiter.emit(filterBody);
    } else {
      return;
    }
  }
  
  

}

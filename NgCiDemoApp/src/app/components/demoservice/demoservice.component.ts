import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoadproductsService } from '../../services/loadproducts.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UtilityService } from '../../services/utility.service';
declare var bootstrap: any;
@Component({
  selector: 'app-demoservice',
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: './demoservice.component.html',
  styleUrl: './demoservice.component.css'
})
export class DemoserviceComponent implements OnInit, AfterViewInit {

  searchParam = {
    query: 'all',
    pageSize: 100
  }
  callProductServe: LoadproductsService;
  utilServe: UtilityService;
  constructor(prodServe: LoadproductsService, utilServe: UtilityService) {
    this.callProductServe = prodServe;
    this.utilServe = utilServe;
  }

  callLoadProducts() {
    this.callProductServe.loadProducts(this.searchParam.query, this.searchParam.pageSize);
  }

  modalImageUrl: string = '';  // Variable to store image URL for modal

  /**
   * Method to open the modal with the given image URL
   * @param imageUrl - to store the image source url.
   */
  openModal(imageUrl: string): void {
    this.modalImageUrl = imageUrl;
    // Manually trigger Bootstrap modal open
    const modalElement = document.getElementById('imageModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }

  ngOnInit(): void {
    this.callLoadProducts();
  }


  initializePopover(): void {
    // Initialize all popovers in the view
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl, { trigger: 'hover' });
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializePopover();
    }, 10);
  }
}

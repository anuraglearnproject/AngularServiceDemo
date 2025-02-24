import { Component, OnInit } from '@angular/core';
import { LoadproductsService } from '../../services/loadproducts.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UtilityService } from '../../services/utility.service';
import { NgbModalModule, NgbCarouselModule, NgbPopoverModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

declare var bootstrap: any;
@Component({
  selector: 'app-demoservice',
  imports: [CommonModule, FormsModule, NgFor, NgbModalModule, NgbCarouselModule,
    NgbPopoverModule, NgbPaginationModule],
  templateUrl: './demoservice.component.html',
  styleUrl: './demoservice.component.css'
})
export class DemoserviceComponent implements OnInit {

<<<<<<< HEAD
  //slider
  selectedImages: any[] = []; // Store images for modal
  selectedIndex: string = '';  // Store index of clicked image

=======
  private checkElements: any;
>>>>>>> 8c5a438be17b509ec2ba86320bd2f3f06ac52759
  totalItems: number = 0;
  currentPage: number = 1;
  paginationPageSize: number = 10;
  // List of available page sizes
  pageSizes: number[] = [5, 10, 15, 20];
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
<<<<<<< HEAD
  openModal(images: any[], index: number) {
    this.selectedImages = images;
    this.selectedIndex = index.toString();
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  openImageInNewTab() {
    if (this.selectedImages.length > 0 && parseInt(this.selectedIndex) >= 0) {
      const activeImageUrl = this.selectedImages[parseInt(this.selectedIndex)].href;
      if (activeImageUrl) {
        window.open(activeImageUrl, '_blank');
      }
    }
  }
  
=======
  openModal(imageUrl: string): void {
    this.modalImageUrl = imageUrl;
    // Manually trigger Bootstrap modal open
    const modalElement = document.getElementById('imageModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }

>>>>>>> 8c5a438be17b509ec2ba86320bd2f3f06ac52759
  ngOnInit(): void {
    this.callLoadProducts();
  }

  getPaginatedData() {
    const startIndex = (this.currentPage - 1) * this.paginationPageSize;
    const endIndex = startIndex + this.paginationPageSize;
    return this.callProductServe.resultData.collection.items.slice(startIndex, endIndex);
  }
  // Called whenever the page size is changed by the user
  onPageSizeChange() {
    this.currentPage = 1; // Reset to first page whenever page size changes
  }
}

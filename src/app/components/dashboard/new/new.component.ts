import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { toBase64 } from '../../../helpers/general_functions';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
    name: string = '';
    price: number = 0.0;
    description: string = '';
    image: string = '';
    product: any = {};
    selectedFile: any;
    nameError: boolean = false;
    priceError: boolean = false;
    descriptionError: boolean = false;
    imageError: boolean = false;

    constructor(private productService: ProductService) {}

    ngOnInit(): void {}
    formValidation = new FormGroup({
        name: new FormControl('', [Validators.required]),
        price: new FormControl('', [Validators.required]),
        description: new FormControl(0, [Validators.required]),
        image: new FormControl('', [Validators.required]),
    });

    async onFileSelected(event: any) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.selectedFile = await toBase64(file);
        }
    }
    handleAddProduct() {
        if (this.formValidation.valid) {
            this.product = {
                name: this.name,
                price: this.price,
                description: this.description,
                image: this.selectedFile,
            };
        } else {
            // check each input error
            if (!this.formValidation.controls.name.valid) {
                this.nameError = true;
            }
            if (!this.formValidation.controls.price.valid) {
                this.priceError = true;
            }
            if (!this.formValidation.controls.description.valid) {
                this.descriptionError = true;
            }
            if (!this.formValidation.controls.image.valid) {
                this.imageError = true;
            }
        }

        this.productService.addProduct(this.product).subscribe(
            (data) => {},
            (err) => console.error(err)
        );
    }
}

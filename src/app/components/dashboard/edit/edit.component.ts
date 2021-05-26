import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router'
import {ProductService} from '../../../services/product.service';
import {toBase64} from '../../../helpers/general_functions';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    productId: string = '';
    oldProductData: any = {};

    name: string = '';
    price: number = 0.0;
    description: string = '';
    image: string = '';
    selectedFile: any;

    product: any = {};

    nameError: boolean = false;
    priceError: boolean = false;
    descriptionError: boolean = false;
    imageError: boolean = false;

    constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {
        this.productId = this.route.snapshot.params.id;
    }

    ngOnInit(): void {
        this.productService.getProductById(this.productId).subscribe(
            (data: any) => {
                this.name = data.name;
                this.price = data.price;
                this.description = data.description;
            },
            (error => {})
        );
    }

    formValidation = new FormGroup({
        name: new FormControl('', [Validators.required]),
        price: new FormControl(0, [Validators.required]),
        description: new FormControl('', [Validators.required]),
        image: new FormControl(),
    });

    async onFileSelected(event: any) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.selectedFile = await toBase64(file);
        }
    }

    handleUpdateProduct() {
        this.nameError = this.priceError = this.descriptionError = this.imageError = false;

        if (this.formValidation.valid) {
            this.product = {
                name: this.name,
                price: this.price,
                description: this.description
            };

            if (this.image) {
                this.product.image = this.selectedFile;
            }

            this.productService.updateProduct(this.productId, this.product).subscribe(
                (data) => {
                    this.router.navigate(['/dashboard/products'])
                },
                (err) => console.error(err)
            );

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
        }
    }


}

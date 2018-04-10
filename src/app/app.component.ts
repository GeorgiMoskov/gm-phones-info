import {
  Component,
  OnInit,
} from '@angular/core';

import {
  Phone
} from './models/phone';

import {
  DisplayType
} from './models/display-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  order: String = 'asc';
  byType: String = 'brand';
  filteredPhones: Phone[];

  phones: Phone[] = [{
      brand: 'Samsung',
      brandImg: 'https://seeklogo.com/images/S/Samsung_Mobile-logo-D8645D09B2-seeklogo.com.png',
      description: 'Best camera ever',
      model: 'S9+',
      price: 899,
      imgUrl: 'https://cdn.shopify.com/s/files/1/1532/0057/products/Samsung-Galaxy-S9-Plus-G965F-Coral-Blue-Front.jpg?v=1521152345',
      specs: {
        displaySize: 5.8,
        displayType: DisplayType.AMOLED
      }
    },
    {
      brand: 'OnePlus',
      brandImg: 'https://seeklogo.com/images/O/oneplus-logo-B6703954CF-seeklogo.com.png',
      description: 'Bang for the bucks',
      model: '5T',
      price: 599,
      imgUrl: 'https://staticshop.o2.co.uk/product/images/oneplus-5t-sku-header.png?cb=a1c2633b92f841bdf825d1c718eec321',
      specs: {
        displaySize: 6.0,
        displayType: DisplayType.AMOLED
      }
    },
    {
      brand: 'iPhone',
      brandImg: 'https://www.pchouselondon.com/wp-content/uploads/2018/02/apple.png',
      description: 'Notch',
      model: 'X',
      price: 999,
      imgUrl: 'https://cdn.macrumors.com/article-new/2017/10/iphone-x-silver.jpg',
      specs: {
        displaySize: 5.8,
        displayType: DisplayType.AMOLED
      }
    },
  ];

  onChange(): void {
    this.filteredPhones = this.filteredPhones.sort((x, y) => {
      if (this.order == 'desc') {
        switch (this.byType) {
          case 'price':
            return (y.price - x.price);
          case 'model':
            return y.model.localeCompare(x.model);
          default:
            return y.brand.localeCompare(x.brand);
        }
      } else {
        switch (this.byType) {
          case 'price':
            return (x.price - y.price);
          case 'model':
            return x.model.localeCompare(y.model);
          default:
            return x.brand.localeCompare(y.brand);
        }
      }
    });



  }

  ngOnInit() {
    this.filteredPhones = this.phones.sort((x, y) => x.brand.localeCompare(y.brand)); // asc by brand
  }

}

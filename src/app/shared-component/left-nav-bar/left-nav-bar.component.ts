import { Component, OnInit, Input, ViewEncapsulation, DoCheck } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
import { ProductSort } from '../../models/product-sort';
import { SortOptions } from "../../models/sort-options";
import { ProductService } from '../../services/product.service';
import { UserService } from 'src/app/services/user/user.service';
import { PriceFilter,PriceOptions } from 'src/app/models/price-filter';
import { SearchFilter } from 'src/app/models/search-filter';
import { CategoryFilter,CategoryFilterOptions } from 'src/app/models/category-filter';
import { ProductFilter } from 'src/app/models/product-filter';
@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LeftNavBarComponent implements OnInit,DoCheck {
  maxPriceRange:number = 500000;
  minValue: number = 0;
  maxValue: number = this.maxPriceRange;
  selectedSort: string = "DateDSC";
  productSortOptions: ProductSort;
  sortOptions: SortOptions;
  userId: string;
  sortValueForFilter:string;
  priceFilterOptions:PriceFilter;
  priceOptions:PriceOptions;
  searchFilterOptions:SearchFilter;
  categoryFilter:CategoryFilter;
  categoryFilterOptions:CategoryFilterOptions;
  productFilter:ProductFilter;
  filters: any[] = [];
  categories = ["Property", "Car", "Furniture", "Mobile", "Bike", "Book", "Fashion", "Electronic", "Other"];
  options: Options = {
    floor: this.minValue,
    ceil: this.maxValue,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '₹' + value.toString();
        case LabelType.High:
          if(value < this.maxPriceRange)
            return '₹' + value.toString();
          else
            return '₹' + value.toString()+"+";
        default:
          return '₹' + value;
      }
    }
  };

  constructor(
    private productService: ProductService,
    private userService: UserService
  ) {
    this.userId = this.userService.getUserFromStorage().id;
  }
  onSelect() {
    this.setProductSortOptions();
  }
  onSelectCheckbox(category:string,isChecked:boolean){
    if(isChecked){
      // this.categoryFilter.category.list.push(category);
      this.categoryFilterOptions.list.push(category);
    }
    else{
      const index: number = this.categoryFilterOptions.list.indexOf(category);
      if (index !== -1) {
        this.categoryFilterOptions.list.splice(index, 1);
      }  
    }
    this.categoryFilter.category = this.categoryFilterOptions;
  }
  ngDoCheck(): void {
    if(this.maxValue > this.maxPriceRange){
      this.maxValue = this.maxPriceRange;
    }
  }
  ngOnInit() {
    this.productSortOptions = new ProductSort();
    this.priceFilterOptions = new PriceFilter();
    this.searchFilterOptions = new SearchFilter();
    this.categoryFilter = new CategoryFilter();
    this.categoryFilterOptions = new CategoryFilterOptions();
    this.categoryFilterOptions.list = [];
    this.sortOptions = new SortOptions();
    this.priceOptions = new PriceOptions();
    this.setProductSortOptions();
  }
  setSortValueForFilter(){
    if(this.sortOptions.Type=="Date" ){
      if(this.sortOptions.Order=="ASC"){
        this.sortValueForFilter = "Oldest";
      }
      else if(this.sortOptions.Order=="DSC"){
        this.sortValueForFilter = "Latest";
      }
    }
    else if(this.sortOptions.Type=="Price"){
      if(this.sortOptions.Order=="ASC"){
        this.sortValueForFilter = "Low to High";
      }
      else if(this.sortOptions.Order=="DSC"){
        this.sortValueForFilter = "High to Low";
      }
    }
  }
  setProductSortOptions() {
    this.sortOptions.Type = this.selectedSort.slice(0, this.selectedSort.length - 3);
    this.sortOptions.Order = this.selectedSort.slice(this.selectedSort.length - 3, this.selectedSort.length);
    this.productSortOptions.ProductSort = this.sortOptions;
    this.setSortValueForFilter();
  }
  setFilterOptions(){
    this.productFilter = new ProductFilter();
    this.productFilter.Filters = [];
    this.setPriceFilterOptions();
    this.setProductSortOptions();
    this.filters.push(this.priceFilterOptions);
    this.filters.push(this.categoryFilter);
    this.productFilter.ProductSort = this.sortOptions;
    this.productFilter.Filters.push(this.priceFilterOptions);
    this.productFilter.Filters.push(this.categoryFilter);
  }
  setPriceFilterOptions(){
    this.priceOptions.min = this.minValue;
    this.priceOptions.max = this.maxValue;
    this.priceFilterOptions.price = this.priceOptions;
  }
  applySort() {
    this.setFilterOptions();
    this.productService.setProductSortOptions(this.productSortOptions);
  }
}

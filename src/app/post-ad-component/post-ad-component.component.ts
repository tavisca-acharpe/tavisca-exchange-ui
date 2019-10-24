import { Component, OnInit } from '@angular/core';
import { ImageProperty } from '../models/imageProperty';
import { DatePipe } from '@angular/common';
import { Product } from '../models/product';

@Component({
  selector: 'app-post-ad-component',
  templateUrl: './post-ad-component.component.html',
  styleUrls: ['./post-ad-component.component.css']
})

export class PostAdComponentComponent implements OnInit {
  minNoOfImage=1;
  maxNoOfImage=5;
  isAddressSelected:boolean=false;
  imageArray:ImageProperty[] =[];
  
  categories = ["Home","Electronics","Car","Bike"]; // this is provided by categories api
  states = ["Andra Pradesh","Go","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka",
  "Kerala","Madya Pradesh","Maharashtra","Punjab","Rajasthan"]
  
  //properties of html element 
  addressDisplayValue = "none";
  purchaseDate = "none";
  imageCounter = 1;

  constructor(public datepipe: DatePipe){} //use for validation of date 
  productModel : Product;
  
  ngOnInit() {
    let image =new ImageProperty();
    this.imageArray.push(image);
    this.productModel=new Product();
  } 

  submitted = false;
  onSubmit() { 
    this.submitted = true;
    console.log(this.productModel);
    console.log(this.productModel.imageUrl);
  }


  date =  new Date();
  latest_date = this.datepipe.transform(this.date, 'yyyy-MM-dd');
  validateDate(id)
  {
    var userDate = id.target.value;
    if(userDate > this.latest_date){
      this.purchaseDate="block";
    }else{
      this.purchaseDate="none";
    }
  }

  validateAddress(event)
  {
    if(event.target.checked)
    {
      this.addressDisplayValue="block";
      this.isAddressSelected=true;
    }
    else{
      this.addressDisplayValue="none"
      this.isAddressSelected=false;
    }
  }

  imageLoader(id)
  {
    this.imageArray[id].crossBtnValue="none";
    this.imageArray[id].imageDisplayValue="none";
    this.imageArray[id].addEditProperty="none";
    this.imageArray[id].pictureContainerStyle = "1px solid lightgrey";
    this.imageArray[id].heroImage = "none";
    this.imageArray[id].imageLoaderProperty="";
  }

  addImage(id,event){
    this.imageLoader(id);
    this.imageArray[id].addEditProperty="";
    this.imageArray[id].crossBtnValue="";
    this.imageArray[id].imageDisplayValue="";
    this.imageArray[id].imageURL = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    this.imageArray[id].buttonName ="Change";
    this.imageArray[id].iconOfButton = "edit";
    this.imageArray[id].imageLoaderProperty="none";
    this.productModel.imageUrl.push("https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");

    if(id==0)
    {
      this.selectHeroImg(id);
      this.imageArray[0].heroImage="";
    }

    this.imageCounter += 1;
    if(this.imageCounter <= this.maxNoOfImage)
    {
      let image =new ImageProperty();
      this.imageArray.push(image);
    }
  }
 
  removeImage(id)
  {
    if(this.imageCounter!=0 && this.imageArray[id].pictureContainerStyle =="4px solid blue")
    {
      this.selectHeroImg(0);
      this.imageArray[0].heroImage="";
    }

    this.imageArray[id].iconOfButton = "plus";
    this.imageArray[id].imageDisplayValue = "none";
    this.imageArray[id].crossBtnValue = "none";
    this.imageArray[id].buttonName = "Add";
    this.imageArray[id].iconOfButton = "plus";
    this.imageArray[id].pictureContainerStyle = "1px solid lightgrey";
    this.productModel.imageUrl.splice(id,1);

    if(this.imageCounter>this.minNoOfImage)
    {
      this.imageArray.splice(id,1);
      this.imageCounter -= 1;
    }
    if(this.imageCounter==this.maxNoOfImage)
    {
      let image =new ImageProperty();
      this.imageArray.push(image);
    }
  }

  selectHeroImg(id)
  {
    for (let index = 0; index < this.imageArray.length; index++) 
    {
      if(index!=id)
      {
        this.imageArray[index].pictureContainerStyle = "1px solid lightgrey";
        this.imageArray[index].heroImage="none";
      }      
    }
    this.imageArray[id].pictureContainerStyle = "4px solid blue";
    this.productModel.heroImageUrl=this.productModel.imageUrl[id];
  }

  imageClick(id){
    document.getElementById(id).click();
  }
}
import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-mini-me-builder',
  templateUrl: './mini-me-builder.page.html',
  styleUrls: ['./mini-me-builder.page.scss'],
})
export class MiniMeBuilderPage implements OnInit {
  @ViewChild('menu') swiperMenu?: SwiperComponent
  @ViewChild('selections') swiperSelection?: SwiperComponent
  @Output() nextSlide = new EventEmitter<any>()
  @Output() saveAvatar = new EventEmitter<any>()
  menuConfig: SwiperOptions = {
    slidesPerView: 4,
    centeredSlides: true
  }
  selectionConfig: SwiperOptions = {
    pagination: false
  }
  swiper: any
  currentIndex?: number
  avatar: any = {
    topType: "LongHairStraightStrand",
    accessoriesType: "Blank",
    hairColor: "Black",
    facialHairType: "Blank",
    clotheType: "Hoodie",
    clotheColor: "Blue03",
    eyeType: "Happy",
    eyebrowType: "Default",
    mouthType: "Twinkle",
    skinColor: "Pale"
  }
  image: string = `https://avataaars.io/?avatarStyle=Circle&topType=${this.avatar.topType}&accessoriesType=Blank&hairColor=${this.avatar.hairColor}&facialHairType=Blank&clotheType=${this.avatar.clotheType}&clotheColor=${this.avatar.clotheColor}&eyeType=${this.avatar.eyeType}&eyebrowType=${this.avatar.eyebrowType}&mouthType=${this.avatar.mouthType}&skinColor=${this.avatar.skinColor}`
  animate: boolean = false
  showClotheColor: boolean = true

  constructor() { }

  ngOnInit() {
  }

  generateAvatar() {
    this.image = `https://avataaars.io/?avatarStyle=Circle&topType=${this.avatar.topType}&accessoriesType=Blank&hairColor=${this.avatar.hairColor}&facialHairType=Blank&clotheType=${this.avatar.clotheType}&clotheColor=${this.avatar.clotheColor}&eyeType=${this.avatar.eyeType}&eyebrowType=${this.avatar.eyebrowType}&mouthType=${this.avatar.mouthType}&skinColor=${this.avatar.skinColor}`
    // Animation hack
    if (this.animate) {
      this.animate = false
    } else {
      this.animate = true
    }
    //Show clothe color
    if (this.avatar.clotheType === 'BlazerShirt' || this.avatar.clotheType === 'BlazerSweater') {
      this.showClotheColor = false
    } else {
      this.showClotheColor = true
    }
    this.saveAvatar.emit(this.image)
  }

  selectSkinColor(color: string) {
    this.avatar.skinColor = color
    this.generateAvatar()
  }

  selectTopType(type: string) {
    this.avatar.topType = type
    this.generateAvatar()
  }

  selectHairColor(color: string) {
    this.avatar.hairColor = color
    this.generateAvatar()
  }

  selectEyeType(type: string) {
    this.avatar.eyeType = type
    this.generateAvatar()
  }

  selectEyebrowType(type: string) {
    this.avatar.eyebrowType = type
    this.generateAvatar()
  }

  selectMouthType(type: string) {
    this.avatar.mouthType = type
    this.generateAvatar()
  }

  selectClotheType(type: string) {
    this.avatar.clotheType = type
    this.generateAvatar()
  }

  selectClotheColor(color: string) {
    this.avatar.clotheColor = color
    this.generateAvatar()
  }

  onSwiper(swiper: any) {
    this.currentIndex = swiper.realIndex
  }

  slideNext() {
    this.nextSlide.emit()
  }

  slideTo(i: number) {
    this.swiperMenu?.swiperRef.slideTo(i)
    this.currentIndex = this.swiperMenu?.swiperRef.activeIndex
  }

  onMenuIndexChange() {
    this.currentIndex = this.swiperMenu?.swiperRef.activeIndex
    this.slideToSelection(this.swiperMenu?.swiperRef.activeIndex)
  }

  onSelectionIndexChange() {
    this.currentIndex = this.swiperSelection?.swiperRef.activeIndex
    this.slideToMenu(this.swiperSelection?.swiperRef.activeIndex)
  }

  slideToSelection(i: any) {
    this.swiperSelection?.swiperRef.slideTo(i);
    this.currentIndex = this.swiperMenu?.swiperRef.activeIndex
  }

  slideToMenu(i: any) {
    this.swiperMenu?.swiperRef.slideTo(i);
    this.currentIndex = this.swiperSelection?.swiperRef.activeIndex
  }

}

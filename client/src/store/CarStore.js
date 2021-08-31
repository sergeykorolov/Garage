import {makeAutoObservable} from "mobx";

export default class CarStore {
   constructor() {
      this._cars = [
         {id: 1, brand: "BMW", model: "740", engine: "3.5", hp: 210, year: 1996, img: "https://i.pinimg.com/originals/f7/7c/6c/f77c6c715095755ca05c992b561fd0ac.png"},
         {id: 2, brand: "AUDI", model: "quattro", engine: "2.5", hp: 260, year: 1986, img: "http://cdn.carbuzz.com/gallery-images/840x560/263000/400/263455.jpg"},
         {id: 3, brand: "PEUGEOT", model: "206", engine: "2.0", hp: 177, year: 2004, img: "https://i.pinimg.com/originals/fa/8e/8b/fa8e8bc4a7b1b1b3f1637ffaab0454b2.jpg"},
         {id: 3, brand: "VAZ", model: "2109", engine: "1.5", hp: 110, year: 2004, img: "https://a.d-cd.net/a43b6ees-1920.jpg"},
      ];
      makeAutoObservable(this);
   }

   setCar(car) {
      this._car = car;
   }

   get cars() {
      return this._cars;
   }
}
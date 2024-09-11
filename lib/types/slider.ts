export interface Slider {
  id: string;
  name: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateSlider {
  name: string;
  image: string;
}

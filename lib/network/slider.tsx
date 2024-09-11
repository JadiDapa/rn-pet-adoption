import { axiosInstance } from "../axios";
import { CreateSlider, Slider } from "../types/slider";

export async function getAllSliders() {
  const { data } = await axiosInstance.get<{ value: Slider[] }>("/sliders");
  return data.value;
}

export async function getSliderById(id: string) {
  const { data } = await axiosInstance.get<{ value: Slider }>(`/sliders/${id}`);
  return data.value;
}

export async function createSlider(values: CreateSlider) {
  const { data } = await axiosInstance.post("/sliders", values);
  return data.value;
}

export async function updateSlider(id: string, values: CreateSlider) {
  const { data } = await axiosInstance.put(`/sliders/${id}`, values);
  return data.value;
}

export async function deleteSlider(id: string) {
  const { data } = await axiosInstance.delete(`/sliders/${id}`);
  return data.value;
}

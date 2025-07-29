import { ServiceResponseDto } from "./service.dto";

export interface ServiceCategoryResponseDto {
  id: number;
  name: string;
  url: string;
  services?: ServiceResponseDto[];
}

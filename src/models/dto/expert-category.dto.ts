import { ExpertResponseDto } from "./expert.dto";

export interface ExpertCategoryResponseDto {
  id: number;
  name?: string;
  url: string;
  experts?: ExpertResponseDto[];
}

import { ExerciseResponseDto } from "./exercise.dto";

export interface ExerciseCategoryResponseDto {
  id: number;
  name: string;
  url: string;
  exercises?: ExerciseResponseDto[];
}

import { AppDataSource } from "../config/database.config";
import { ExerciseCategory } from "../models/entities/exercise-category.entity";

const exerciseCategoryRepository =
  AppDataSource.getRepository(ExerciseCategory);

export const getAllExerciseCategories = async (): Promise<
  ExerciseCategory[]
> => {
  return await exerciseCategoryRepository.find();
};

export const getAllExerciseCategoriesWithExercises = async (): Promise<
  ExerciseCategory[]
> => {
  return await exerciseCategoryRepository.find({ relations: ["exercises"] });
};

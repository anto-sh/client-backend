import { Request, Response } from "express";
import * as exerciseCategoryService from "../services/exercise-category.service";
import { ExerciseCategoryResponseDto } from "../models/dto/exercise-category.dto";
import { ExerciseCategory } from "../models/entities/exercise-category.entity";
import { sendResponse } from "../utils/api-response";
import { handleError } from "../utils/error-handler";

const toResponseDto = (
  entity: ExerciseCategory
): ExerciseCategoryResponseDto => ({
  id: entity.id,
  name: entity.name,
  url: entity.url,
  exercises: entity.exercises,
});

export const getAllExerciseCategories = async (req: Request, res: Response) => {
  try {
    const exerciseCategories =
      await exerciseCategoryService.getAllExerciseCategories();
    const data = exerciseCategories.map(toResponseDto);

    sendResponse(res, {
      status: "success",
      data,
    });
  } catch (error) {
    handleError(res, error as Error);
  }
};

export const getAllExerciseCategoriesWithExercises = async (
  req: Request,
  res: Response
) => {
  try {
    const exerciseCategories =
      await exerciseCategoryService.getAllExerciseCategoriesWithExercises();
    const data = exerciseCategories.map(toResponseDto);

    sendResponse(res, {
      status: "success",
      data,
    });
  } catch (error) {
    handleError(res, error as Error);
  }
};

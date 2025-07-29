import { Request, Response } from "express";
import * as exerciseService from "../services/exercise.service";
import {
  ExerciseResponseDto,
} from "../models/dto/exercise.dto";
import { Exercise } from "../models/entities/exercise.entity";
import { sendResponse } from "../utils/api-response";
import { handleError } from "../utils/error-handler";

const toResponseDto = (entity: Exercise): ExerciseResponseDto => ({
  id: entity.id,
  name: entity.name,
  categoryId: entity.category?.id,
  contentJson: entity.contentJson,
});

export const getAllExercises = async (req: Request, res: Response) => {
  try {
    const exercises = await exerciseService.getAllExercises();
    const data = exercises.map(toResponseDto);
    sendResponse(res, {
      status: "success",
      data,
    });
  } catch (error) {
    handleError(res, error as Error);
  }
};

export const getExerciseById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const exercise = await exerciseService.getExerciseById(id);
    console.log(exercise);

    if (!exercise) {
      handleError(res, new Error("Упражнение не найдено"), 404);
      return;
    }

    const data = toResponseDto(exercise);
    sendResponse(res, {
      status: "success",
      data,
    });
  } catch (error) {
    handleError(res, error as Error);
  }
};

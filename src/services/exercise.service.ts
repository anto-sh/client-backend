import { AppDataSource } from "../config/database.config";
import { Exercise } from "../models/entities/exercise.entity";

const exerciseRepository = AppDataSource.getRepository(Exercise);

export const getAllExercises = async (): Promise<Exercise[]> => {
  return await exerciseRepository.find({ relations: ["category"] });
};
export const getExerciseById = async (id: number): Promise<Exercise | null> => {
  return await exerciseRepository.findOne({
    where: { id },
    relations: ["category"],
  });
};

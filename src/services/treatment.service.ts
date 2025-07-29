import { AppDataSource } from "../config/database.config";
import { Treatment } from "../models/entities/treatment.entity";

const treatmentRepository = AppDataSource.getRepository(Treatment);

export const getAllTreatments = async (): Promise<Treatment[]> => {
  return await treatmentRepository.find();
};

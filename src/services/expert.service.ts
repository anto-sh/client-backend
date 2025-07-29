import { AppDataSource } from "../config/database.config";
import { Expert } from "../models/entities/expert.entity";

const expertRepository = AppDataSource.getRepository(Expert);

export const getAllExperts = async (): Promise<Expert[]> => {
  return await expertRepository.find({
    relations: ["category"],
    order: { id: "ASC" },
  });
};

export const getExpertById = async (id: number): Promise<Expert | null> => {
  return await expertRepository.findOne({
    where: { id },
    relations: ["category"],
  });
};

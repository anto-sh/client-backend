import { AppDataSource } from "../config/database.config";
import { Service } from "../models/entities/service.entity";

const serviceRepository = AppDataSource.getRepository(Service);

export const getAllServices = async (): Promise<Service[]> => {
  return await serviceRepository.find({ relations: ["category"] });
};

export const getServiceById = async (id: number): Promise<Service | null> => {
  return await serviceRepository.findOne({
    where: { id },
    relations: ["category"],
  });
};

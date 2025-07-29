import { AppDataSource } from "../config/database.config";
import { ServiceCategory } from "../models/entities/service-category.entity";

const serviceCategoryRepository = AppDataSource.getRepository(ServiceCategory);

export const getAllServiceCategories = async (): Promise<ServiceCategory[]> => {
  return await serviceCategoryRepository.find();
};

export const getAllServiceCategoriesWithServices = async (): Promise<
  ServiceCategory[]
> => {
  return await serviceCategoryRepository.find({ relations: ["services"] });
};

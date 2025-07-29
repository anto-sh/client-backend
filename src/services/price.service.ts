import { AppDataSource } from "../config/database.config";
import { Price } from "../models/entities/price.entity";

const priceRepository = AppDataSource.getRepository(Price);

export const getAllPrices = async (): Promise<Price[]> => {
  return await priceRepository.find();
};

export const getPriceById = async (id: number): Promise<Price | null> => {
  return await priceRepository.findOneBy({ id });
};

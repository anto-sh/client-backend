import { Request, Response } from "express";
import * as serviceCategoryService from "../services/service-category.service";
import {
  ServiceCategoryResponseDto,
} from "../models/dto/service-category.dto";
import { ServiceCategory } from "../models/entities/service-category.entity";
import { sendResponse } from "../utils/api-response";
import { handleError } from "../utils/error-handler";

const toResponseDto = (
  entity: ServiceCategory
): ServiceCategoryResponseDto => ({
  id: entity.id,
  name: entity.name,
  url: entity.url,
  services: entity.services,
});

export const getAllServiceCategories = async (req: Request, res: Response) => {
  try {
    const categories = await serviceCategoryService.getAllServiceCategories();
    const data = categories.map(toResponseDto);

    sendResponse(res, {
      status: "success",
      data,
    });
  } catch (error) {
    handleError(res, error as Error);
  }
};

export const getAllServiceCategoriesWithServices = async (
  req: Request,
  res: Response
) => {
  try {
    const categories =
      await serviceCategoryService.getAllServiceCategoriesWithServices();
    const data = categories.map(toResponseDto);

    sendResponse(res, {
      status: "success",
      data,
    });
  } catch (error) {
    handleError(res, error as Error);
  }
};
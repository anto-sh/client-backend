import { Request, Response } from "express";
import * as serviceService from "../services/service.service";
import {
  ServiceResponseDto,
} from "../models/dto/service.dto";
import { Service } from "../models/entities/service.entity";
import { sendResponse } from "../utils/api-response";
import { handleError } from "../utils/error-handler";

const toResponseDto = (entity: Service): ServiceResponseDto => ({
  id: entity.id,
  name: entity.name,
  imageUrl: entity.imageUrl,
  price: entity.price,
  procedures: entity.procedures,
  categoryId: entity.category?.id,
});

export const getAllServices = async (req: Request, res: Response) => {
  try {
    const services = await serviceService.getAllServices();
    const data = services.map(toResponseDto);

    sendResponse(res, {
      status: "success",
      data,
    });
  } catch (error) {
    handleError(res, error as Error);
  }
};

export const getServiceById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const service = await serviceService.getServiceById(id);

    if (!service) {
      handleError(res, new Error("Услуга не найдена"), 404);
      return;
    }

    const data = toResponseDto(service);
    sendResponse(res, {
      status: "success",
      data,
    });
  } catch (error) {
    handleError(res, error as Error);
  }
};
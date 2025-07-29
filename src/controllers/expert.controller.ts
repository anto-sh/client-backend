import { Request, Response } from "express";
import * as expertService from "../services/expert.service";
import {
  ExpertResponseDto,
} from "../models/dto/expert.dto";
import { Expert } from "../models/entities/expert.entity";
import { sendResponse } from "../utils/api-response";
import { handleError } from "../utils/error-handler";

const toResponseDto = (entity: Expert): ExpertResponseDto => ({
  id: entity.id,
  fullName: entity.fullName,
  description: entity.description,
  imageUrl: entity.imageUrl,
  categoryId: entity.category?.id,
  contentJson: entity.contentJson,
});

export const getAllExperts = async (req: Request, res: Response) => {
  try {
    const experts = await expertService.getAllExperts();
    const data = experts.map(toResponseDto);
    sendResponse(res, {
      status: "success",
      data,
    });
  } catch (error) {
    handleError(res, error as Error);
  }
};

export const getExpertById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const expert = await expertService.getExpertById(id);

    if (!expert) {
      handleError(res, new Error("Специалист не найден"), 404);
      return;
    }

    const data = toResponseDto(expert);
    sendResponse(res, {
      status: "success",
      data,
    });
  } catch (error) {
    handleError(res, error as Error);
  }
};
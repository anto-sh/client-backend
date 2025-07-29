import { Request, Response } from "express";
import * as treatmentService from "../services/treatment.service";
import {
  TreatmentResponseDto,
} from "../models/dto/treatment.dto";
import { Treatment } from "../models/entities/treatment.entity";
import { sendResponse } from "../utils/api-response";
import { handleError } from "../utils/error-handler";

const toResponseDto = (entity: Treatment): TreatmentResponseDto => ({
  id: entity.id,
  name: entity.name,
});

export const getAllTreatments = async (req: Request, res: Response) => {
  try {
    const treatments = await treatmentService.getAllTreatments();
    const data = treatments.map(toResponseDto);
    sendResponse(res, {
      status: "success",
      data,
    });
  } catch (error) {
    handleError(res, error as Error);
  }
};
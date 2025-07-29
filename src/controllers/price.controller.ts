import { Request, Response } from "express";
import * as priceService from "../services/price.service";
import {
  PriceResponseDto,
} from "../models/dto/price.dto";
import { sendResponse } from "../utils/api-response";
import { handleError } from "../utils/error-handler";
import { Price } from "../models/entities/price.entity";

const toResponseDto = (entity: Price): PriceResponseDto => ({
  id: entity.id,
  name: entity.name,
  price: entity.price,
});

export const getAllPrices = async (req: Request, res: Response) => {
  try {
    const prices = await priceService.getAllPrices();
    const data = prices.map(toResponseDto);
    sendResponse(res, {
      status: "success",
      data,
    });
  } catch (error) {
    handleError(res, error as Error);
  }
};

export const getPriceById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const price = await priceService.getPriceById(id);

    if (!price) {
      handleError(res, new Error("Цена не найдена"), 404);
      return;
    }

    sendResponse(res, {
      status: "success",
      data: toResponseDto(price),
    });
  } catch (error) {
    handleError(res, error as Error);
  }
};
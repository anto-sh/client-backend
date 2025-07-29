import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import {
  IsNotEmpty,
  IsString,
  IsArray,
  ArrayNotEmpty,
  IsInt,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { ServiceCategory } from "./service-category.entity";

@Entity("service")
export class Service {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  name!: string;

  @Column({ name: "image_url" })
  @IsNotEmpty()
  @IsString()
  imageUrl!: string;

  @Column("decimal", { precision: 10, scale: 2 })
  @IsNotEmpty()
  @IsInt()
  price!: number;

  @Column("simple-array")
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  procedures!: string[];

  @ManyToOne(() => ServiceCategory, (category) => category.services, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "category_id" })
  @ValidateNested()
  @Type(() => ServiceCategory)
  category!: ServiceCategory;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { IsNotEmpty, IsString, IsJSON, IsObject } from "class-validator";
import { ExerciseCategory } from "./exercise-category.entity";

@Entity("exercise")
export class Exercise {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  name?: string;

  @ManyToOne(() => ExerciseCategory, (category) => category.exercises, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "category_id" })
  category?: ExerciseCategory;

  @Column({ name: "content_json", type: "json" })
  @IsNotEmpty()
  @IsObject()
  contentJson: any;
}

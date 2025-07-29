import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Unique,
} from "typeorm";
import { Exercise } from "./exercise.entity";

@Entity("exercise_category")
@Unique(["name"])
@Unique(["url"])
export class ExerciseCategory {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  url!: string;

  @OneToMany(() => Exercise, (exercise) => exercise.category)
  exercises?: Exercise[];
}

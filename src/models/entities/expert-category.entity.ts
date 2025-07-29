import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Unique,
} from "typeorm";
import { Expert } from "./expert.entity";

@Entity("expert_category")
@Unique(["name"])
@Unique(["url"])
export class ExpertCategory {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  url!: string;

  @OneToMany(() => Expert, (expert) => expert.category)
  experts?: Expert[];
}

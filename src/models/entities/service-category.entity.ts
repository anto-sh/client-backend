import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Unique,
} from "typeorm";
import { Service } from "./service.entity";
import { IsNotEmpty, IsString } from "class-validator";

@Entity("service_category")
@Unique(["name"])
@Unique(["url"])
export class ServiceCategory {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsNotEmpty()
  name!: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  url!: string;

  @OneToMany(() => Service, (service) => service.category)
  services?: Service[];
}

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// Что лечим
@Entity()
export class Treatment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
}

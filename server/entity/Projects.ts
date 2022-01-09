import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Projects{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  project_name: String;

  @Column()
  color: String;

  @ManyToOne(() => User, user => user.projects)
  @JoinColumn({ name: "user_id" })
  user: User;

}
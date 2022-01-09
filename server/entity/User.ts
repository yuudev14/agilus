import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Projects } from "./Projects";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @OneToMany(() => Projects, project => project.user)
  projects: Projects[]
}

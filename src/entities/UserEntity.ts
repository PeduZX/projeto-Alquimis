import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from "typeorm";
import { MaterialChangeEntity } from "./MaterialChangeEntity";

@Entity("users")
export class UserEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 255 })
  name!: string;

  @Column({ unique: true, length: 255 })
  email!: string;

  @Column({ name: "password_hash", length: 255 })
  passwordHash!: string;

  @Column({ name: "profile_picture", length: 255, nullable: true })
  profilePicture!: string;

  @Column({ default: false })
  canSeeNotifications!: boolean;

  @Column({ default: false })
  accountsAccess!: boolean;

  @Column({ default: false })
  materialsEdit!: boolean;

  @CreateDateColumn()
  created_at!: Date;

  @OneToMany(() => MaterialChangeEntity, (mc) => mc.user)
  changes!: MaterialChangeEntity[];
}

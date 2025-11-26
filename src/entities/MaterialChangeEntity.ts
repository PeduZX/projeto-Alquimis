import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { MaterialEntity } from "./MaterialEntity";
import { UserEntity } from "./UserEntity";

export enum ChangeType {
  ADD = "ADD",
  REMOVE = "REMOVE"
}

@Entity("material_changes")
export class MaterialChangeEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "int", nullable: true })
  old_quantity?: number;

  @Column({ type: "int", nullable: true })
  new_quantity?: number;

  @Column({
    type: "enum",
    enum: ChangeType
  })
  change_type!: ChangeType;

  @CreateDateColumn()
  created_at!: Date;

  @ManyToOne(() => MaterialEntity, (m) => m.changes, { onDelete: "CASCADE" })
  material!: MaterialEntity;

  @ManyToOne(() => UserEntity, (u) => u.changes, { onDelete: "CASCADE" })
  user!: UserEntity;
}

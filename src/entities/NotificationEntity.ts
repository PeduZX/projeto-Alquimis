import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { MaterialEntity } from "./MaterialEntity";

@Entity("notifications")
export class NotificationEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => MaterialEntity, (m) => m.notifications, { onDelete: "CASCADE" })
  material!: MaterialEntity;

  @Column({ type: "int" })
  quantidade_necessaria!: number;

  @Column({ length: 500 })
  message!: string;

  @Column({ default: false })
  is_read!: boolean;

  @CreateDateColumn()
  created_at!: Date;
}

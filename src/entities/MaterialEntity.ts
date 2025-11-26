import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from "typeorm";
import { NotificationEntity } from "./NotificationEntity";
import { MaterialChangeEntity} from "./MaterialChangeEntity";

export enum MaterialStatus {
  ADEQUADO = 'Estoque Adequado',
  COMPRAR = 'Comprar',
  CRITICO = 'Crítico'
}

@Entity("materials")

export class MaterialEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 255 })
  name!: string;

  @Column({ type: "int", default: 0 })
  quantidade_atual!: number;

  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  preco_unitario!: number;

  @Column({
    type: "enum",
    enum: MaterialStatus,
    default: MaterialStatus.ADEQUADO
  })
  status_compra!: MaterialStatus;

  @CreateDateColumn()
  created_at!: Date;

  @OneToMany(() => NotificationEntity, (n) => n.material)
  notifications!: NotificationEntity[];

  @OneToMany(() => MaterialChangeEntity, (mc) => mc.material)
  changes!: MaterialChangeEntity[];
}

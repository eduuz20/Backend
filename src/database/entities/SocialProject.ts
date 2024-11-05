import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,  } from "typeorm";
import { EprojetStatus } from "../../models/EProjectStatus";

@Entity()
export class SocialProject {
  @PrimaryGeneratedColumn("uuid")
  uid!: string;

  @Column("varchar", {
    length: 100,
    unique: true,
    nullable: false,
  })
  project_name!: string;

  @Column("varchar", {
    length: 80,
    unique: false,
  })
  classification!: string;

  @Column("varchar", {
    length: 255,
    unique: false,
  })
  description!: string;
  
  @Column("varchar", {
    length: 80,
    unique: false,
  })
  agent_name!: string;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  agent_role!: string;

  @Column("varchar", {
    length: 130,
    unique: false,
  })
  email!: string;

  @Column("varchar", {
    length: 14,
    unique: false,
  })
  phone!: string;

  @Column("varchar", {
    length: 100,
    unique: false,
  })
  website!: string;

  @Column("enum", {
    enum: EprojetStatus,
    nullable: false,
  })
  status!: string;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  created_at!: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    
  })
  updated_at!: Date;



 
}
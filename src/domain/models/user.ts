import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm"

@Entity()
class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("varchar", { length: 255 })
  name: string

  @Column("varchar", { length: 255, nullable: true })
  document: string

  @Column("varchar", { length: 255, unique: true })
  email: string

  @Column("varchar", { length: 50, nullable: true })
  phone: string

  @Column("varchar", { length: 255 })
  password: string

  @Column("varchar", { length: 50 })
  type: string

  @Column("varchar", { length: 50, nullable: true })
  zipcode: string

  @Column("varchar", { length: 50, nullable: true })
  state: string

  @Column("varchar", { length: 100, nullable: true })
  city: string

  @Column("varchar", { length: 255, nullable: true })
  district: string

  @Column("varchar", { length: 255, nullable: true })
  street: string

  @Column("varchar", { length: 255, nullable: true })
  number: string

  @Column("varchar", { length: 255, nullable: true })
  complement: string

  @Column("varchar", { length: 50, nullable: true })
  status: string

  @Column("varchar", { name: "account_type", length: 10, nullable: true })
  accountType: string

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date

  @UpdateDateColumn({
    name: "updated_at",
    type: "timestamp",
    default: () => "NOW()",
    onUpdate: "NOW()",
  })
  updatedAt: Date

  @DeleteDateColumn({ name: "deleted_at", nullable: true })
  deletedAt: Date
}

export default Users

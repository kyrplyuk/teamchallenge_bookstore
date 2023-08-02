import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CategoryName } from '../constants/ category.name.enum';


@Entity('categories')
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: CategoryName, default: CategoryName.child })
  status: CategoryName;

  @Column({
    name: 'create_date',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_date' })
  updatedAt: Date;
}

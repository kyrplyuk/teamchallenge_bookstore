import { CategoryEntity } from 'src/categories/entities/category.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('books')
export class BookEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  author: string;

  @Column({ type: 'varchar', unique: true })
  isbn: string;

  @Column({ type: 'int', nullable: true })
  price: number;

  @Column({ type: 'varchar' })
  image: string;

  @Column({ type: 'varchar' })
  isInSale: string;

  @Column({
    name: 'create_date',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_date' })
  updatedAt: Date;

  @ManyToOne(() => CategoryEntity, (category) => category.books, {
    eager: true,
  })
  category: CategoryEntity;
}

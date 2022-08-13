import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('masters')
export class Master {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;
}

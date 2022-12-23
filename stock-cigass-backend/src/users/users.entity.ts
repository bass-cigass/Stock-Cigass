import * as crypto from 'crypto';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('utilisateur')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  email: string;

  @Column()
  tel: string;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }
  
  @Column()
  password: string;

  @Column()
  roles: string;

  @Column()
  isActive : number;

  @Column()
  isLogin: number;

  @Column()
  isVerified: number;
}
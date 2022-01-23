import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('users')
class User {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    crm: Number;

    @Column()
    tel: Number;

    @Column()
    cel: Number;

    @Column()
    cep: number;

    @Column( "text", {array: true, default: "{}" })
    specialty: string[];

    @CreateDateColumn()
    created_at?: Date;

    constructor(props: User) {
        Object.assign(this, props)
        
        if(!this.id) {
            this.id = uuidV4()
        }
    }
}

export {User}
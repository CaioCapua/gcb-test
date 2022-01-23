import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('specialty')
class Specialty {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    constructor(name: string) {
        this.name = name

        if(!this.id) {
            this.id = uuidV4()
        }
    }
}

export {Specialty}
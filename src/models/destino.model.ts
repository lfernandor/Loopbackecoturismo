import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Destino extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nomLugar: string;

  @property({
    type: 'string',
    required: true,
  })
  lugar: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Destino>) {
    super(data);
  }
}

export interface DestinoRelations {
  // describe navigational properties here
}

export type DestinoWithRelations = Destino & DestinoRelations;

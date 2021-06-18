import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BdJsonDataSource} from '../datasources';
import {Destino, DestinoRelations} from '../models';

export class DestinoRepository extends DefaultCrudRepository<
  Destino,
  typeof Destino.prototype.id,
  DestinoRelations
> {
  constructor(
    @inject('datasources.BDJson') dataSource: BdJsonDataSource,
  ) {
    super(Destino, dataSource);
  }
}

import { DefaultCrudRepository } from '@loopback/repository';
import { AlertRequest, AlertRequestRelations } from '../models';
import { ElephantDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class AlertRequestRepository extends DefaultCrudRepository<
  AlertRequest,
  typeof AlertRequest.prototype.requestid,
  AlertRequestRelations
  > {
  constructor(
    @inject('datasources.elephant') dataSource: ElephantDataSource,
  ) {
    super(AlertRequest, dataSource);
  }
}

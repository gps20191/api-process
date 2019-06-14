import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './elephant.datasource.json';

export class ElephantDataSource extends juggler.DataSource {
  static dataSourceName = 'elephant';

  constructor(
    @inject('datasources.config.elephant', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

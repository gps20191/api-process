import { Entity, model, property } from '@loopback/repository';

@model({ settings: {} })
export class AlertRequest extends Entity {
  @property({
    type: 'number',
    id: true
  })
  requestid: number;

  @property({
    type: 'number',
  })
  processed?: number;

  @property({
    type: 'number',
  })
  match?: number;

  @property({
    type: 'number',
  })
  alerted?: number;

  @property({
    type: 'string',
  })
  urlphoto?: string;

  @property({
    type: 'string',
  })
  blobimg?: string;

  @property({
    type: 'number',
  })
  latitude?: number;

  @property({
    type: 'number',
  })
  longitude?: number;

  @property({
    type: 'date',
  })
  requestdate?: string;

  @property({
    type: 'number',
  })
  idphoto?: number;

  @property({
    type: 'number',
  })
  numbus?: number;


  constructor(data?: Partial<AlertRequest>) {
    super(data);
  }
}

export interface AlertRequestRelations {
  // describe navigational properties here
}

export type AlertRequestWithRelations = AlertRequest & AlertRequestRelations;

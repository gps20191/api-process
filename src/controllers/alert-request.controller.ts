import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {AlertRequest} from '../models';
import {AlertRequestRepository} from '../repositories';

export class AlertRequestController {
  constructor(
    @repository(AlertRequestRepository)
    public alertRequestRepository : AlertRequestRepository,
  ) {}

  @post('/process', {
    responses: {
      '200': {
        description: 'AlertRequest model instance',
        content: {'application/json': {schema: {'x-ts-type': AlertRequest}}},
      },
    },
  })
  async create(@requestBody() alertRequest: AlertRequest): Promise<AlertRequest> {
    return await this.alertRequestRepository.create(alertRequest);
  }

  @get('/process/count', {
    responses: {
      '200': {
        description: 'AlertRequest model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(AlertRequest)) where?: Where<AlertRequest>,
  ): Promise<Count> {
    return await this.alertRequestRepository.count(where);
  }

  @get('/process', {
    responses: {
      '200': {
        description: 'Array of AlertRequest model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': AlertRequest}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(AlertRequest)) filter?: Filter<AlertRequest>,
  ): Promise<AlertRequest[]> {
    return await this.alertRequestRepository.find(filter);
  }

  @patch('/process', {
    responses: {
      '200': {
        description: 'AlertRequest PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() alertRequest: AlertRequest,
    @param.query.object('where', getWhereSchemaFor(AlertRequest)) where?: Where<AlertRequest>,
  ): Promise<Count> {
    return await this.alertRequestRepository.updateAll(alertRequest, where);
  }

  @get('/process/{id}', {
    responses: {
      '200': {
        description: 'AlertRequest model instance',
        content: {'application/json': {schema: {'x-ts-type': AlertRequest}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<AlertRequest> {
    return await this.alertRequestRepository.findById(id);
  }

  @patch('/process/{id}', {
    responses: {
      '204': {
        description: 'AlertRequest PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() alertRequest: AlertRequest,
  ): Promise<void> {
    await this.alertRequestRepository.updateById(id, alertRequest);
  }

  @put('/process/{id}', {
    responses: {
      '204': {
        description: 'AlertRequest PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() alertRequest: AlertRequest,
  ): Promise<void> {
    await this.alertRequestRepository.replaceById(id, alertRequest);
  }

  @del('/process/{id}', {
    responses: {
      '204': {
        description: 'AlertRequest DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.alertRequestRepository.deleteById(id);
  }
}

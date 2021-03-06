import { Get, JsonController, Param } from 'routing-controllers'
import { AreaService } from 'services'
import { AreaEntity } from 'entities'

@JsonController()
export class AreaController {
  constructor(private areaService: AreaService) {}

  @Get('/area/:id')
  async area(@Param('id') id: number): Promise<AreaEntity> {
    return await this.areaService.findById(id)
  }

  @Get('/area/:parentId/children')
  async children(@Param('parentId') parentId: number): Promise<AreaEntity[]> {
    return await this.areaService.findChildrenByParentId(parentId)
  }

  @Get('/areas')
  async allAreas(): Promise<AreaEntity[]> {
    return await this.areaService.findAll()
  }
}

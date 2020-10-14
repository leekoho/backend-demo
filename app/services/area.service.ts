import { getRepository, Repository } from 'typeorm'
import { Service } from 'typedi'
import { AreaEntity } from 'app/entities'

@Service()
export class AreaService {
  repository: Repository<AreaEntity>

  constructor() {
    this.repository = getRepository(AreaEntity)
  }

  findById(id: number = 0): Promise<AreaEntity> {
    return this.repository.findOne({ id: id || 0 })
  }

  findChildrenByParentId(parentId: number = 0): Promise<AreaEntity[]> {
    return this.repository.find({
      where: { parentId: parentId || 0 },
      select: ['id', 'parentId', 'name', 'code', 'pinyin'],
    })
  }

  findAll(): Promise<AreaEntity[]> {
    return this.repository.find()
  }

  findByDepth(depth: number): Promise<AreaEntity[]> {
    return this.repository.find({ depth })
  }
}

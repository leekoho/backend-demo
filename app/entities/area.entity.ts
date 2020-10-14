import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm'
import { AreaDepthEnum } from 'enums'

@Entity('area')
export class AreaEntity extends BaseEntity {
  @PrimaryColumn({
    type: 'int',
    comment: '编号',
  })
  id: number

  @Column({
    type: 'int',
    name: 'parent_id',
    comment: '父级编号',
  })
  parentId: number

  @Column({
    type: 'varchar',
    comment: '名称',
  })
  name: string

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '行政区划码',
  })
  code: string

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '省级',
  })
  province: string

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '市级',
  })
  city: string

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '县级',
  })
  county: string

  @Column({
    type: 'varchar',
    name: 'area_code',
    nullable: true,
    comment: '区号',
  })
  areaCode: string

  @Column({
    type: 'varchar',
    name: 'post_code',
    nullable: true,
    comment: '邮编',
  })
  postCode: string

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '简称',
  })
  abbr: string

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '拼音',
  })
  pinyin: string

  @Column({
    type: 'varchar',
    name: 'abbr_pinyin',
    nullable: true,
    comment: '简拼',
  })
  abbrPinyin: string

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '首字母',
  })
  initials: string

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '英文',
  })
  english: string

  @Column({
    nullable: true,
    comment: '经度',
  })
  long: string

  @Column({
    nullable: true,
    comment: '纬度',
  })
  lat: string

  @Column({
    type: 'varchar',
    name: 'province_abbr',
    nullable: true,
    comment: '省级简称',
  })
  provinceAbbr: string

  @Column({
    type: 'varchar',
    name: 'city_abbr',
    nullable: true,
    comment: '市级简称',
  })
  cityAbbr: string

  @Column({
    type: 'varchar',
    name: 'county_abbr',
    nullable: true,
    comment: '县级简称',
  })
  countyAbbr: string

  @Column({
    type: 'varchar',
    name: 'province_pinyin',
    nullable: true,
    comment: '省级拼音',
  })
  provincePinyin: string

  @Column({
    type: 'varchar',
    name: 'city_pinyin',
    nullable: true,
    comment: '市级拼音',
  })
  cityPinyin: string

  @Column({
    type: 'varchar',
    name: 'county_pinyin',
    nullable: true,
    comment: '县级拼音',
  })
  countyPinyin: string

  @Column({
    type: 'varchar',
    name: 'parent_path',
    nullable: true,
    comment: '父级路径',
  })
  parentPath: string

  @Column({
    type: 'tinyint',
    default: 1,
    enum: AreaDepthEnum,
    comment: '深度',
  })
  depth: number

  @Column({
    type: 'varchar',
    name: 'full_path',
    nullable: true,
    comment: '全路径',
  })
  fullPath: string
}

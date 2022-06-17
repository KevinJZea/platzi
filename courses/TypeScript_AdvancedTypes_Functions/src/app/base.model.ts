export type Id = string | number;
export interface BaseModel {
  readonly id: Id;
  readonly createdAt: Date;
  updatedAt: Date;
}

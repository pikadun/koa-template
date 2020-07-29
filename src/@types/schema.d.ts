/**
 * Schema定义文件，参考 http://json-schema.org/draft-07/schema
 */
interface Schema {
    title: string
    description?: string
    type: 'object' | 'array' | 'number' | 'integer'
    properties: { [x: string]: Schema }
    required?: string[]
}

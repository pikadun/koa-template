interface Schema {
    title: string
    description?: string
    type: 'object' | 'array' | 'number' | 'integer'
    properties: { [x: string]: Schema }
    required?: string[]
}

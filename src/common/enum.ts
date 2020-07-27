export enum ErrorCode {
    unknown = -1,
    invalidArgument = -2
}

export const ErrorCodeLabel = new Map<number, string>([
    [ErrorCode.unknown, '未知异常，请联系管理员！'],
    [ErrorCode.invalidArgument, '参数错误！']
]);
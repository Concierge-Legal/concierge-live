import { PipelineModel} from './types';

export interface BaseRequest {
    vendor: string;
    model: string;
    callingFunction: string;
    pipelineModel: PipelineModel;
}
export interface BaseResponse {
    errorMessage?: string
    pipelineModel: PipelineModel
}

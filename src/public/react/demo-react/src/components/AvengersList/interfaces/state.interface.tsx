import IAvenger from './../../../models/interfaces/IAvenger';

/**
 * AvengerList state interface
 * @export
 * @interface IAvengerListState
 */
export default interface IAvengerListState {
    loading: boolean;
    avengers: IAvenger[];
    selectedAvengers: IAvenger[];
    error: boolean;
    errorMsg?: string;
}
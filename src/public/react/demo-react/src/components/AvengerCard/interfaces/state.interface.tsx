import IAvenger from './../../../models/interfaces/IAvenger';

/**
 * Interface to get typed state inside AvengerCard component
 *
 * @export
 * @interface IAvengerCardState
 */
export default interface IAvengerCardState {
    loading: boolean;
    avenger?: IAvenger;
}